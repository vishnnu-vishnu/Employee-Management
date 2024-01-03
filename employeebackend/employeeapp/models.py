from django.db import models

# Create your models here.

class Employee(models.Model):
    empid=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50,null=True,blank=True)
    place=models.CharField(max_length=50,null=True,blank=True)
    mobile=models.IntegerField(null=True,blank=True)

