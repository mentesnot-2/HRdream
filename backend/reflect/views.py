from typing import Any

from rest_framework import generics, permissions

from .models import Rating, Report
from .serailizers import RatingSerializer, ReportSerializer


class RatingListAPIView(generics.ListAPIView):
    serializer_class = RatingSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Rating.objects.none()

    def get_queryset(self): # pyright: ignore[reportIncompatibleMethodOverride]
        user: Any = self.request.user
        org_id = user.profile.organization_id

        return Rating.objects.filter(organization_id=org_id).order_by("sort_order","id")


class RatingUpdateAPIView(generics.UpdateAPIView):
    serializer_class = RatingSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["put"]
    queryset = Rating.objects.none()

    def get_queryset(self): # pyright: ignore[reportIncompatibleMethodOverride]
        user: Any = self.request.user
        org_id = user.profile.organization_id
        return Rating.objects.filter(organization_id=org_id)


class ReportListAPIView(generics.ListAPIView):
    serializer_class = ReportSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Report.objects.none()


    def get_queryset(self): # pyright: ignore[reportIncompatibleMethodOverride]
        user: Any = self.request.user
        org_id = user.profile.organization_id
        return Report.objects.filter(organization_id=org_id).order_by("-created_at")

