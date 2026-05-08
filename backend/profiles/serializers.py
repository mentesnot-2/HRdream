from rest_framework import serializers
from .models import UpcomingEvent, UpcomingTask, UserPreference


class UpcomingEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvent
        fields = [
            "id",
            "title",
            "event_date",
            "event_time",
            "category",
            "created_at",
            "updated_at",
        ]

        read_only_fields = ["id","created_at","updated_at"]



class UpcomingTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingTask
        fields = [
            "id",
            "title",
            "due_date",
            "status",
            "priority",
            "created_at",
            "updated_at",

        ]

        read_only_fields = ["id","created_at","updated_at"]


class UserPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreference

        fields = [
            "theme",
            "language",
            "notification_enabled",
        ]
        