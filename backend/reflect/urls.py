from django.urls import path
from .views import RatingListAPIView, RatingUpdateAPIView, ReportListAPIView


urlpatterns = [
    path("reflect/ratings/", RatingListAPIView.as_view(), name="rating-list"),
    path("reflect/ratings/<int:pk>/", RatingUpdateAPIView.as_view(), name="rating-update"),
    path("reflect/reports/", ReportListAPIView.as_view(), name="report-list"),
]