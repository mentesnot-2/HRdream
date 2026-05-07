from rest_framework import serializers
from .models import Rating, Report



class RatingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rating
        fields = [
            "id",
            "label",
            "score",
            "max_score",
            "sort_order",
            "created_at",
            "updated_at",
        ]

        read_only_fields = ["id", "created_at", "updated_at"]


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report

        fields = [
            "id",
            "title",
            "summary",
            "created_at",
            "updated_at",
        ]


        read_only_fields = ["id", "created_at", "updated_at"]