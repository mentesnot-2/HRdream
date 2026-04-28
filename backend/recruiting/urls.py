from rest_framework.routers import DefaultRouter
from .views import ApplicantViewSet

router = DefaultRouter()
router.register(r"applicants", ApplicantViewSet, basename="applicants")

urlpatterns = router.urls