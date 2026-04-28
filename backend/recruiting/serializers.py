from rest_framework import serializers
from .models import Applicant


class ApplicantSerializer(serializers.ModelSerializer):
    stage_label = serializers.CharField(source="get_stage_display",read_only=True)


    class Meta:

        model = Applicant
        fields = [
            "id",
            "organization",
            "full_name",
            "email",
            "location",
            "position",
            "department",
            "stage",
            "stage_label",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id","organization","created_at","updated_at","stage_label"]