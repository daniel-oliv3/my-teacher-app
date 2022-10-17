from django.shortcuts import render
from django.http import JsonResponse

#def home(request):
#    return render(request, 'app/home.html')

def home(request):
    return JsonResponse({"nome": "Daniel Oliveira", "idade": 35})