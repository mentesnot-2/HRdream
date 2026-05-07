from django.db import models
from organizations.models import Organization,TimeStampedModel


class Rating(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="ratings",
    )

    label = models.CharField(max_length=120)
    score = models.PositiveSmallIntegerField()
    max_score = models.PositiveSmallIntegerField(default=10)
    sort_order = models.PositiveIntegerField(default=10)


    class Meta(TimeStampedModel.Meta):
        ordering = ["sort_order","id"]
        constraints = [
            models.UniqueConstraint(
                fields = ["organization", "sort_order"],
                name = "unique_rating_order_per_org"
            )
        ]
    
    def __str__(self):
        return f"{self.organization.slug}:{self.label}"


class Report(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="reports",

    )

    title = models.CharField(max_length=255)
    summary = models.TextField()

    class Meta(TimeStampedModel.Meta):
        ordering = ["-created_at"]

    def __str__(self):
        return self.title