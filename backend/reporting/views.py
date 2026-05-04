from django.db.models import Count
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from directory.models import Department, Employee
from .models import DashboardStat, Announcement,DashboardStatCategory
from .serializers import DashboardOverviewSerializer



class DashboardOverviewView(APIView):
    permission_classes = [IsAuthenticated]


    def get(self, request):
        org_id = request.user.profile.organization_id

        stats = DashboardStat.objects.filter(organization_id=org_id)

        metrics = [
            {"id": s.id,"label": s.label,"value": s.value,"description": s.description} for s in stats.filter(category=DashboardStatCategory.METRIC)
        ]

        summary_cards = [
            {"id": s.id,"label": s.label,"value": s.value,"description": s.description} for s in stats.filter(category=DashboardStatCategory.SUMMARY)
        ]

        quality = stats.filter(category=DashboardStatCategory.QUALITY)
        quality_workflow = {
            "labels": [s.label for s in quality],
            "data": [int(s.value) if s.value.isdigit() else 0 for s in quality]
        }

        dept_rows = {
            Department.objects.filter(organization_id=org_id).annotate(headcount=Count("employees")).order_by("name")
        }

        department_chart = {
            "labels": [d.name for d in dept_rows],
            "data": [d.headcount for d in dept_rows]
        }

        announcements = Announcement.objects.filter(organization_id=org_id).order_by("-created_at")[:20]

        return Response(
            {
                "metrics": metrics,
                "summary_cards": summary_cards,
                "department_chart": department_chart,
                "quality_workflow_data": quality_workflow,
                "announcements": {
                    {"id": a.id,"title": a.title,"date": a.created_at} for a in announcements
                }
            }
        )