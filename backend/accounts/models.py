from django.conf import settings
from django.db import models
from organizations.models import Organization


class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile",
    )

    organization = models.ForeignKey(
        Organization,
        on_delete=models.PROTECT,
        related_name="profiles",
    )

    def __str__(self):
        return f"{self.user.username} -> {self.organization.name}"