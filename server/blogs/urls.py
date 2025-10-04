from django.urls import path
from .views import *

urlpatterns = [
    path('auth/', AuthView.as_view(), name='auth'),
    path('oauth2callback/', GoogleOAuthView.as_view(), name='oauth2callback'),
    path('posts/', DisplayAllPostsView.as_view(), name='display-posts'),
    path('create/', CreateBlogPostView.as_view(), name='create-post')
]