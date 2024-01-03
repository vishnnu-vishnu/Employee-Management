from django.shortcuts import render
from django.http.response import JsonResponse
from employeeapp.models import Employee
from employeeapp.serializers import employeeserializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

# Create your views here.
@csrf_exempt
def EmployeeAPI(request,id=0):
    if request.method=="GET":
        x=Employee.objects.all()
        y=employeeserializer(x,many=True)
        return JsonResponse(y.data,safe=False)
    elif request.method=="POST":
        x=JSONParser().parse(request)
        y=employeeserializer(data=x)
        if y.is_valid():
            y.save()
            return JsonResponse("Data Saved",safe=False)
        return JsonResponse("Invalid Data",safe=False)
    elif request.method=="PUT":
        x=JSONParser().parse(request)
        y=Employee.objects.get(empid=x['empid'])
        z=employeeserializer(y,data=x)
        if z.is_valid():
            z.save()
            return JsonResponse("Data Updated Sucessfully",safe=False)
        return JsonResponse("Invalid Data",safe=False)
    elif request.method=="DELETE":
        x=Employee.objects.get(empid=id)
        x.delete()
        return JsonResponse("Data Delete",safe=False)



