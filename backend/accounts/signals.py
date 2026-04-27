from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

from organizations.models import Organization
from .models import Profile


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_profile(sender, instance, created, **kwargs):
    if not created:
        return 

    # Temporary bootstrap behavior
    # attach user to first org if present

    org = Organization.objects.order_by("id").first()
    if org:
        Profile.objects.create(user=instance, organization=org)