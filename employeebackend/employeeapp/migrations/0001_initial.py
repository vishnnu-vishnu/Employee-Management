# Generated by Django 5.0 on 2024-01-02 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('empid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('place', models.CharField(blank=True, max_length=50, null=True)),
                ('mobile', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
