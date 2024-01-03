from rest_framework import serializers
from employeeapp.models import Employee

class employeeserializer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        fields=('empid',
                'name',
                'place',
                'mobile')