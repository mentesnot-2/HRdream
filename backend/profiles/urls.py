from django.urls import path
from .views import (
    ProfileSummaryAPIView,
    UpcomingEventListAPIView,
    UpcomingTaskListAPIView,
    UserPreferenceRetrieveUpdateAPIView,
)


urlpatterns = [
    path("profile/summary/", ProfileSummaryAPIView.as_view(), name="profile-summary"),
    path("profile/upcoming-events/", UpcomingEventListAPIView.as_view(), name="upcoming-events"),
    path("profile/upcoming-tasks/", UpcomingTaskListAPIView.as_view(), name="upcoming-tasks"),
    path("settings/", UserPreferenceRetrieveUpdateAPIView.as_view(), name="user-preferences"),
]