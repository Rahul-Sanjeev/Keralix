# your_app/urls.py

from django.urls import path
from .views import ProductListCreateView, ProductDetailView

urlpatterns = [
    path(
        "products/", ProductListCreateView.as_view(), name="product-list-create"
    ),  # For listing and creating products
    path(
        "products/<int:pk>/", ProductDetailView.as_view(), name="product-detail"
    ),  # For retrieving, updating, and deleting a product
]
