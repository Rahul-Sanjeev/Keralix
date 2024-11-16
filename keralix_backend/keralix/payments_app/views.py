from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Payment
from .serializers import PaymentSerializer


class PaymentListCreateView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        payment = serializer.save(user=self.request.user)  # Save the payment
        return Response(
            {
                "message": "Payment created successfully!",
                "payment": PaymentSerializer(payment).data,
            },
            status=201,
        )  # Return a custom response with the created payment data


class PaymentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(
            {"message": "Payment deleted successfully!"}, status=204
        )  # Custom response for deletion
