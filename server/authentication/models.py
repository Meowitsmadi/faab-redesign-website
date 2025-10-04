from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin

class CustomUserManager(BaseUserManager):
   def create_user(self, email, password, **extra_fields):
       if not email:
            raise ValueError("The Email field is required")
       if not password:
            raise ValueError('The password field cannot be empty')
       email = self.normalize_email(email)
       user = self.model(email=email, **extra_fields)
       user.set_password(password)
       user.save(using=self._db)
       return user
   
   def create_superuser(self, email, password, **extra_fields):
       extra_fields.setdefault('is_staff', True)
       extra_fields.setdefault('is_superuser', True)
       return self.create_user(email, password, **extra_fields)
       
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    blogger_acc_token = models.TextField(null=True, blank=True)
    blogger_ref_token = models.TextField(null=True, blank=True)
    blogger_expiry = models.DateTimeField(null=True, blank=True)

    objects = CustomUserManager()
    USERNAME_FIELD = 'email'

    def __str__(self):
        return f'ID: {self.id} - {self.email}'
    
