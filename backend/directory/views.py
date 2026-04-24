from rest_framework import viewsets, filters
from .models import Department, Employee
from .serializers import DepartmentSerializer, EmployeeSerializer

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.select_related("organization").all()
    serializer_class = DepartmentSerializer
    filter_backends = [filters.SearchFilter,filters.OrderingFilter]
    search_fields = ["name"]
    ordering_fields = ["name","created_at"]
    ordering = ["name"]


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.select_related("organization","department").all()
    serializer_class = EmployeeSerializer
    filter_backends = [filters.SearchFilter,filters.OrderingFilter]
    search_fields = ["full_name","work_email","role_title","location"]
    ordering_fields = ["full_name","created_at"]
    ordering = ["full_name"]