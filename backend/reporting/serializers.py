from rest_framework import serializers

class AnnouncementSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    created_at = serializers.DateTimeField()

class DashboardOverviewSerializer(serializers.Serializer):
    metrics = serializers.ListField(child=serializers.DictField())
    summary_cards = serializers.ListField(child=serializers.DictField())
    department_chart = serializers.DictField()
    quality_workflow_data = serializers.DictField()
    announcements = AnnouncementSerializer(many=True)