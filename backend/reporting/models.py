from django.db import models
from organizations.models import Organization


class Announcement(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="announcements",

    )
    title = models.CharField(max_length=255)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title



class DashboardStatCategory(models.TextChoices):
    METRIC = "metric","Metric"
    SUMMARY = "summary","Summary"
    Quality = "quality","Quality"


class DashboardStat(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="dashboard_stats",
    )
    category = models.CharField(max_length=20, choices=DashboardStatCategory.choices)
    label = models.CharField(max_length=120)
    value = models.CharField(max_length=120)
    description = models.CharField(max_length=255, blank=True)
    sort_order = models.PositiveIntegerField(default=0)


    class Meta:
        ordering = ["category", "sort_order","id"]
        constraints = [
            models.UniqueConstraint(
                fields = ["organization", "category", "sort_order"],
                name = "unique_dashboard_stat_order_per_org_cat"
            )
        ]

    def __str__(self):
        return f"{self.organization.slug}: {self.category} - {self.label}"