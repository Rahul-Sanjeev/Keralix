from rest_framework import generics, permissions
from .models import Order
from .serializers import OrderSerializer


class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]  # Ensure only authenticated users can create orders

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)  # Automatically set the user to the logged-in user


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]  # Ensure only authenticated users can access orders
