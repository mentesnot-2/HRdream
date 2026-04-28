from django.db import models
from organizations.models import Organization, TimeStampedModel


class ApplicantStage(models.TextChoices):
    APPLIED = "applied"
    INTERVIEWED = "interviewed"
    MADE_OFFER = "made_offer"
    HIRED = "hired"


class Applicant(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="applicants",
    )

    full_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=120)
    position = models.CharField(max_length=120)
    department = models.CharField(max_length=120,blank=True)
    stage = models.CharField(
        max_length=20,
        choices=ApplicantStage.choices,
        default=ApplicantStage.APPLIED,
    )

    class Meta(TimeStampedModel.Meta):
        ordering = ["-created_at"]
        constraints = [
            models.UniqueConstraint(
                fields=["organization", "email"],
                name="unique_applicant_email_per_org",
            )
        ]
    def __str__(self):
        return f"{self.full_name} - {self.stage}"