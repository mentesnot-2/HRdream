from django.db import models



from organizations.models import TimeStampedModel,Organization


class Department(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="departments",
    )

    name = models.CharField(max_length=255)

    class Meta(TimeStampedModel.Meta):
        ordering = ["name"]
        constraints = [
            models.UniqueConstraint(
                fields=["organization","name"],
                name="uniq_department_name_per_org"
            )
        ]
    
    def __str__(self) -> str:
        return f"{self.organization.name} - {self.name}"

class Employee(TimeStampedModel):
    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE,
        related_name="employees",
    )
    department = models.ForeignKey(
        Department,
        on_delete=models.CASCADE,
        related_name="employees",
    )

    full_name = models.CharField(max_length=255)
    work_email = models.EmailField(unique=True)
    role_title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    avatar_url = models.URLField(blank=True,null=True)

    class Meta(TimeStampedModel.Meta):
        ordering = ["full_name"]
        constraints = [
            models.UniqueConstraint(
                fields=["organization","work_email"],
                name="uniq_employee_work_email_per_org"
            )
        ]


    def __str__(self) -> str:
        return str(self.full_name)