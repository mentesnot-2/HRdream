from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import me, register, verify_email_request, verify_email_confirm


urlpatterns = [
    path("register/",register, name="register"),
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("me/", me, name="me"),
    path("verify-email/request/",verify_email_request, name="verify_email_request"),
    path("verify_email/confirm/",verify_email_confirm,name="verify_email_confirm")
]
