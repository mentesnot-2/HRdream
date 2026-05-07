from django.contrib import admin
from .models import Rating, Report


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ["id", "label", "score", "max_score", "sort_order","organization"]
    list_filter = ("organization",)
    search_fields = ("label",)

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "summary", "organization"]
    list_filter = ("organization",)
    search_fields = ("title","summary",)


    