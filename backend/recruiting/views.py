from typing import Any

from rest_framework import filters, viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Applicant
from .serializers import ApplicantSerializer

class ApplicantViewSet(viewsets.ModelViewSet):
    queryset = Applicant.objects.none()
    serializer_class = ApplicantSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["full_name", "email", "position", "department", "location"]
    ordering_fields = ["created_at", "full_name", "stage"]

    def get_queryset(self):  # pyright: ignore[reportIncompatibleMethodOverride]
        user: Any = self.request.user
        org_id = user.profile.organization_id
        return Applicant.objects.filter(organization_id=org_id)

    def perform_create(self, serializer):
        user: Any = self.request.user
        serializer.save(organization=user.profile.organization)
