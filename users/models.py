from django.db import models
from django.db.models import CharField
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    name = CharField(max_length=100, blank=True)

    def __str__(self):
        return self.email