from django.contrib import admin

from .models import UpcomingEvent, UpcomingTask, UserPreference



@admin.register(UpcomingEvent)
class UpcomingEventAdmin(admin.ModelAdmin):
    list_display = ("title","event_date","event_time","category","organization")
    list_filter = ("organization","event_date","category")

    search_fields = ("title",)



@admin.register(UpcomingTask)
class UpcomingTaskAdmin(admin.ModelAdmin):
    list_display = ("id","title","due_date","status","priority","organization")
    list_filter = ("organization","status","priority")
    search_fields = ("title",)


@admin.register(UserPreference)
class UserPreferenceAdmin(admin.ModelAdmin):
    list_display = ("id","user","theme","language","notification_enabled")
    search_fields = ("user__username","user__email")