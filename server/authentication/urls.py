from django.urls import path
from .views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
     path('admin-login/', AdminLoginView.as_view(), name ='admin-login'),
     path('admin-logout/', AdminLogoutView.as_view(), name='admin-logout'),
    #  path('token/', TokenObtainPairView.as_view(), name ='token-obtain_pair'),
     path('token/refresh/', TokenRefreshView.as_view(), name ='token-refresh'),
]