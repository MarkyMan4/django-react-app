from pickle import GET
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

class TestView(viewsets.ViewSet):
    @action(methods=['GET'], detail=False)
    def data(self, request):
        return Response([
            {'task': 'do some stuff', 'isCompleted': False},
            {'task': 'do some other stuff', 'isCompleted': True},
            {'task': 'do things', 'isCompleted': False}
        ])
