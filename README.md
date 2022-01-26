# django-react-app

This repo is for demonstrating how to deploy a React app along with a Django back end. \
\
This is done by having the Django app's static files directory pointed to the build folder of the react app. By doing this, there only needs to be one URL 
that actually renders the index.html. Since the React app is a SPA, this is the only time the back end needs to return a web page to the client. All other
interaction with the backend is done via REST API endpoints using Django REST framework.
