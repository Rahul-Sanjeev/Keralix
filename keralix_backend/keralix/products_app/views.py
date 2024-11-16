from django.shortcuts import render

from rest_framework import generics, permissions
from .models import Product
from .serializers import ProductSerializer


# Create your views here.


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]  # Allow unauthenticated users to read


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]  # Require authentication to modify
