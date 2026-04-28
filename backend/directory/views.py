from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticated


from .models import Department, Employee
from .serializers import DepartmentSerializer, EmployeeSerializer

class DepartmentViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    # queryset = Department.objects.select_related("organization").all()
    serializer_class = DepartmentSerializer
    filter_backends = [filters.SearchFilter,filters.OrderingFilter]
    search_fields = ["name"]
    ordering_fields = ["name","created_at"]
    ordering = ["name"]

    def get_queryset(self):
        org_id = self.request.user.profile.organization_id
        return Department.objects.select_related("organization").filter(organization_id=org_id)
    
    def perform_create(self,serializer):
        serializer.save(organization=self.request.user.profile.organization)


class EmployeeViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    # queryset = Employee.objects.select_related("organization","department").all()
    serializer_class = EmployeeSerializer
    filter_backends = [filters.SearchFilter,filters.OrderingFilter]
    search_fields = ["full_name","work_email","role_title","location"]
    ordering_fields = ["full_name","created_at"]
    ordering = ["full_name"]

    def get_queryset(self):
        org_id = self.request.user.profile.organization_id
        return Employee.objects.select_related("organization","department").filter(organization_id = org_id)
    def perform_create(self,serializer):
        serializer.save(organization=self.request.user.profile.organization)