from django.contrib import admin
from .models import Announcement, DashboardStat



@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ("id","title", "organization", "created_at")
    list_filter = ("organization",)


@admin.register(DashboardStat)
class DashboardStatAdmin(admin.ModelAdmin):
    list_display = ("id","organization", "category", "label", "value", "sort_order")
    list_filter = ("organization", "category")