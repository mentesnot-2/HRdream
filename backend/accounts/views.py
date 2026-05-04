import secrets
from typing import Any, cast

from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Profile
from .serializers import (
    RegisterSerializer,
    VerifyEmailConfirmSerializer,
    VerifyEmailRequestSerializer,
)

User = get_user_model()


@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = cast(AbstractUser, serializer.save())

    return Response(
        {"id": user.pk, "username": user.username, "email": user.email},
        status=status.HTTP_201_CREATED,
    )


@api_view(["POST"])
@permission_classes([AllowAny])
def verify_email_request(request):
    serializer = VerifyEmailRequestSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data = cast(dict[str, Any], serializer.validated_data)
    email = data["email"]
    user = User.objects.filter(email__iexact=email).first()

    if not user:
        return Response(
            {"detail": "If the email exists, a verification token was issued."}
        )

    profile = getattr(user, "profile", None)

    if not profile:
        return Response(
            {"detail": "If the email exists, a verification token was issued."}
        )

    token = secrets.token_urlsafe(32)
    profile.email_verification_token = token
    profile.email_verification_sent_at = timezone.now()
    profile.save(
        update_fields=["email_verification_token", "email_verification_sent_at"]
    )

    u = cast(AbstractUser, user)
    print(f"[VERIFY_EMAIL_TOKEN] user={u.email} token={token}")
    return Response(
        {"detail": "If the email exists, a verification token was issued."}
    )


@api_view(["POST"])
@permission_classes([AllowAny])
def verify_email_confirm(request):
    serializer = VerifyEmailConfirmSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data = cast(dict[str, Any], serializer.validated_data)
    token = data["token"]
    profile = (
        Profile.objects.filter(email_verification_token=token)
        .select_related("user")
        .first()
    )

    if not profile:
        return Response(
            {"detail": "Invalid token."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    profile.email_verified = True
    profile.email_verification_token = ""
    profile.save(update_fields=["email_verified", "email_verification_token"])

    return Response({"detail": "Email verified successfully."})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    user = cast(AbstractUser, request.user)
    profile = getattr(user, "profile", None)
    return Response(
        {
            "id": user.pk,
            "username": user.username,
            "email": user.email,
            "organization": (
                {
                    "id": profile.organization.id,
                    "name": profile.organization.name,
                    "slug": profile.organization.slug,
                }
                if profile
                else None
            ),
            "email_verified": profile.email_verified if profile else False,
        }
    )
