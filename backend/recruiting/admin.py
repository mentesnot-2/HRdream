from django.contrib import admin

from .models import Applicant

@admin.register(Applicant)
class ApplicantAdmin(admin.ModelAdmin):
    list_display=("id","full_name","email","stage","position")
    list_filter = ("organization","stage")
    search_fields = ("full_name","email","position","department")