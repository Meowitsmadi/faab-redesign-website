from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
     path('admin-login/', views.AdminLoginView.as_view(), name ='admin-login'),
     path('token/', TokenObtainPairView.as_view(), name ='token-obtain_pair'),
     path('token/refresh/', TokenRefreshView.as_view(), name ='token-refresh'),
]