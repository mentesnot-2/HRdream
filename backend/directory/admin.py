from django.contrib import admin
from .models import Department,Employee

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ["id","name","organization","created_at","updated_at"]
    list_filter = ("organization",)
    search_fields = ("name",)


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ["id","full_name","work_email","role_title","location","department","created_at","updated_at"]
    list_filter = ("organization","department",)
    search_fields = ("full_name","work_email","role_title")
