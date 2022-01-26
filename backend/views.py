from django.shortcuts import render


# it is able to find index.html because I defined where to look for static files in settings.py.
def index(request):
    return render(request, 'index.html', {})