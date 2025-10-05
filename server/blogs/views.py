from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from rest_framework.permissions import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from bs4 import BeautifulSoup
from google.auth.transport.requests import Request
import os
import requests
import json

from dotenv import load_dotenv
load_dotenv()
API_KEY = os.getenv('BLOGGER_API_KEY')
BLOG_ID = os.getenv('BLOG_ID')
CLIENT_SECRET = 'client_secret.json'
SCOPES = ['https://www.googleapis.com/auth/blogger']
REDIRECT_URI = 'http://127.0.0.1:8000/blog/oauth2callback/'

# Creates a GoogleOAuth flow object, uses credentials, and defines the scope
def get_google_oauth():
    return Flow.from_client_secrets_file(CLIENT_SECRET, scopes=SCOPES, redirect_uri=REDIRECT_URI)

def get_blogger_creds(user):
    creds = Credentials(
        token=user.blogger_acc_token,
        refresh_token=user.blogger_ref_token,
        token_uri='https://oauth2.googleapis.com/token',
        client_secret=CLIENT_SECRET,
        scopes=['https://www.googleapis.com/auth/blogger']
    )
    if creds.refresh_token or creds.expired:
        creds.refresh(Request())
        user.blogger_acc_token = creds.token
        user.blogger_expiry = timezone.make_aware(creds.expiry)
        user.save()
    
    return creds

# sends user to google sign in page & authenticates account
class AuthView(APIView):
    def get(self, request):
        flow = get_google_oauth()
        auth_url, state = flow.authorization_url(
            access_type='offline',
            include_granted_scopes='true'
        )
        request.session['state'] = state
        return redirect(auth_url)

# redirects to the create post page after user is authorized
class GoogleOAuthView(APIView):
    def get(self, request):
        flow = get_google_oauth()
        flow.fetch_token(authorization_response=request.build_absolute_uri())
        credentials = flow.credentials
        
        # Save blogger auth info with user in DB
        user = request.user
        user.blogger_acc_token = credentials.token
        user.blogger_ref_token = credentials.refresh_token
        user.blogger_expiry = timezone.make_aware(credentials.expiry)
        user.save()

        return redirect('/blog/create/') # change later on to the admin view to create post

# # ----- Google Authorization Not Needed -----

class DisplayAllPostsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        service = build("blogger", "v3", developerKey=API_KEY)

        posts = service.posts().list(blogId=BLOG_ID, maxResults=5).execute()
        result = []
        for post in posts.get("items", []):
            content_html = post.get("content", "")
            # Parse HTML and extract text
            content_text = BeautifulSoup(content_html, "html.parser").get_text()
            result.append({
                "id": post.get("id"),
                "title": post.get("title"),
                "content": content_text,
            })

        return Response(result)

class SearchForPostView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        service = build("blogger", "v3", developerKey=API_KEY)
        query = "butterflies" # switch to take in user input later
        search_results = service.posts().search(
            blogId=BLOG_ID, 
            q=query, 
            orderBy="PUBLISHED").execute()
        
        result = []
        for post in search_results.get("items", []):
            content_html = post.get("content", "")
            # Parse HTML and extract text
            content_text = BeautifulSoup(content_html, "html.parser").get_text()
            result.append({
                "id": post.get("id"),
                "title": post.get("title"),
                "content": content_text,
            })

        if result:
            return Response(result)
        else:
            return Response({"message": "No posts found"})

# ----- Google Authorization Needed -----

class CreateBlogPostView(APIView):
    # authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdminUser]
    def post(self, request):
        user = request.user
        credentials = get_blogger_creds(user)

        if not credentials:
            return redirect("/blog/auth/")

        service = build("blogger", "v3", credentials=credentials)
        title = request.data.get("title", "Untitled")
        content = request.data.get("content", "")

        body = {
            "kind": "blogger#post",
            "title": title,
            "content": content
        }

        try:
            post = service.posts().insert(blogId=BLOG_ID, body=body).execute()
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        return Response({"status": "success", "post": post}, status=201)
    
class DeletePostView(APIView):
    permission_classes = [IsAdminUser]
    def delete(self, request, post_id):
        user = request.user
        credentials = get_blogger_creds(user)

        if not credentials:
            return redirect("/blog/auth/")

        service = build("blogger", "v3", credentials=credentials)
        try:
            service.posts().delete(
                blogId=BLOG_ID, 
                postId=post_id, 
                useTrash=True).execute()
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        return Response({"status": "success",}, status=204)

class UpdatePostView(APIView):
    permission_classes = [IsAdminUser]
    def patch(self, request, post_id):
        user = request.user
        credentials = get_blogger_creds(user)

        if not credentials:
            return redirect("/blog/auth/")

        service = build("blogger", "v3", credentials=credentials)
        data = request.data

        try:
            service.posts().patch(
                blogId=BLOG_ID,
                postId=post_id,
                body=data
            ).execute()
        except Exception as e:
            return Response({"error": str(e)}, status=400)
        return Response({"status": "success",}, status=200)