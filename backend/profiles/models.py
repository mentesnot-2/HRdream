
from django.conf import settings
from django.db import models
from organizations.models import Organization, TimeStampedModel


class UpcomingEvent(TimeStampedModel):

    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="upcoming_events",
    )

    title = models.CharField(max_length=255)
    event_date = models.DateField()
    event_time = models.TimeField()
    category = models.CharField(max_length=255)

    class Meta(TimeStampedModel.Meta):
        ordering = ["event_date","event_time","id"]


    def __str__(self):
        return self.title


class UpcomingTaskStatus(models.TextChoices):
    TODO = "todo", "To Do"
    IN_PROGRESS = "in_progress","In progress"
    DONE = "done", "Done"


class UpcomingTaskPriority(models.TextChoices):
    LOW = "low", "Low"
    MEDIUM = "medium", "Medium"
    HIGH = "high", "High"


class UpcomingTask(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="upcoming_tasks",
    )
    title = models.CharField(max_length=255)
    due_date = models.DateField()
    status = models.CharField(
        max_length=20,
        choices=UpcomingTaskStatus.choices,
        default=UpcomingTaskStatus.TODO,
        )

    priority = models.CharField(
        max_length=20,
        choices=UpcomingTaskPriority.choices,
        default=UpcomingTaskPriority.MEDIUM,
    )

    class Meta(TimeStampedModel.Meta):
        ordering = ["due_date","id"]


    def __str__(self):
        return self.title


class UserPreference(TimeStampedModel):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="preferences",
    )

    theme = models.CharField(
        max_length=20,
        default="light",
    )

    language = models.CharField(max_length=10,default="en")
    notification_enabled = models.BooleanField(default=True)
    

    