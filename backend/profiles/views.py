from typing import Any
from rest_framework import generics, permissions
from rest_framework.response import Response

from .models import UpcomingEvent, UpcomingTask, UserPreference
from .serializers import (
    UpcomingEventSerializer,
    UpcomingTaskSerializer,
    UserPreferenceSerializer,
)


class ProfileSummaryAPIView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user: Any = request.user
        org_id = user.profile.organization_id

        events_count = UpcomingEvent.objects.filter(organization_id=org_id).count()
        tasks_count = UpcomingTask.objects.filter(organization_id=org_id).count()

        return Response(
            {
                "user_id": user.id,
                "organization_id": org_id,
                "upcoming_events_count": events_count,
                "upcoming_tasks_count": tasks_count,
            }
        )


class UpcomingEventListAPIView(generics.ListAPIView):
    serializer_class = UpcomingEventSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = UpcomingEvent.objects.none()

    def get_queryset(self):  # pyright: ignore[reportIncompatibleMethodOverride]
        user: Any = self.request.user
        return UpcomingEvent.objects.filter(
            organization_id=user.profile.organization_id
        ).order_by("event_date", "event_time", "id")


class UpcomingTaskListAPIView(generics.ListAPIView):
    serializer_class = UpcomingTaskSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = UpcomingTask.objects.none()

    def get_queryset(self):  # pyright: ignore[reportIncompatibleMethodOverride]
        user: Any = self.request.user
        return UpcomingTask.objects.filter(
            organization_id=user.profile.organization_id
        ).order_by("due_date", "id")


class UserPreferenceRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = UserPreferenceSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = UserPreference.objects.none()

    def get_object(self):  # pyright: ignore[reportIncompatibleMethodOverride]
        user: Any = self.request.user
        obj, _ = UserPreference.objects.get_or_create(user=user)
        return obj