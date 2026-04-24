from rest_framework import serializers
from .models import Department, Employee


class DepartmentSerializer(serializers.ModelSerializer):
    organization_name = serializers.CharField(source="organization.name",read_only=True)
    class Meta:
        model = Department
        fields = [
            "id",
            "organization",
            "organization_name",
            "name",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id","organization_name","created_at","updated_at"]


class EmployeeSerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(source="department.name",read_only=True)

    class Meta:
        model = Employee
        fields = [
            "id",
            "organization",
            "department",
            "department_name",
            "full_name",
            "work_email",
            "role_title",
            "location",
            "avatar_url",
            "created_at",
            "updated_at",
        ]

        read_only_fields = ["id","department_name","created_at","updated_at"]