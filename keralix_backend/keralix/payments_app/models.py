from django.db import models

from django.contrib.auth import get_user_model
from orders_app.models import Order


# Create your models here.


User = get_user_model()


class Payment(models.Model):
    PAYMENT_METHOD_CHOICES = [
        ("UPI", "UPI"),
        ("GOOGLE_PAY", "Google Pay"),
        ("PAYTM", "Paytm"),
        ("PHONE_PAY", "Phone Pay"),
        ("CREDIT_CARD", "Credit Card"),
        ("DEBIT_CARD", "Debit Card"),
    ]

    STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("COMPLETED", "Completed"),
        ("FAILED", "Failed"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="PENDING")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.order.id} - {self.status}"
