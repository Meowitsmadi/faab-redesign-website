from django.shortcuts import render
from django.conf import settings
from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from bs4 import BeautifulSoup
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
        state = request.session['state']
        flow = get_google_oauth()
        flow.fetch_token(authorization_response=request.build_absolute_uri())
        credentials = flow.credentials
        request.session['credentials'] = {
            'token': credentials.token,
            'refresh_token': credentials.refresh_token,
            'token_uri': credentials.token_uri,
            'client_id': credentials.client_id,
            'client_secret': credentials.client_secret,
            'scopes': credentials.scopes
        }
        return redirect('/blog/create/') # change later on to the admin view to create post

# Displays all posts from a blog using the blog id
class DisplayAllPostsView(APIView):
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

# Creates a post with a title and content
class CreateBlogPostView(APIView):
    def post(self, request):
        credentials = request.session.get("credentials")
        if not credentials:
            return redirect("/blog/auth/")

        creds = Credentials(**credentials)
        service = build("blogger", "v3", credentials=creds)

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
        return Response({"status": "success", "post": post})
    
# class SearchForPostView(APIView):

# class DeletePostView(APIView):

# class UpdatePostView(APIView):