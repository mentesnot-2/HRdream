from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers


from organizations.models import Organization
from .models import Profile


User = get_user_model()


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True,min_length=8)
    organization_slug = serializers.CharField(required=True,allow_blank=True)


    def validate_password(self, value):
        validate_password(value)
        return value
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already in use.")

        return value

    def create(self,validated_data):
        org_slug = validated_data.pop("organization_slug","").strip()

        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"]

        )

        # org assignment policy for now
        # 1) use provided slug if valid
        # 2) else fallback to first org
        org = None

        if org_slug:
            org = Organization.objects.filter(slug=org_slug).first()
        if not org:
            org = Organization.objects.order_by("id").first()
        
        if not org:
            raise serializers.ValidationError("No Organization available. Create one first.")
        Profile.objects.update_or_create(user=user,defaults={"organization": org})

        return user

class VerifyEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()


class VerifyEmailConfirmSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=128)
    