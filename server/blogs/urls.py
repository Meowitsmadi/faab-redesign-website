from django.urls import path
from .views import *

urlpatterns = [
    path('auth/', AuthView.as_view(), name='auth'),
    path('oauth2callback/', GoogleOAuthView.as_view(), name='oauth2callback'),
    path('posts/', DisplayAllPostsView.as_view(), name='display-posts'),
    path('create/', CreateBlogPostView.as_view(), name='create-post'),
    path('search/', SearchForPostView.as_view(), name='search-posts'),
    path('delete/<str:post_id>/', DeletePostView.as_view(), name='del-post'),
    path('patch/<str:post_id>/', UpdatePostView.as_view(), name='patch-post')
]