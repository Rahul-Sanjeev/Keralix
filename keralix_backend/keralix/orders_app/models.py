from django.db import models
from accounts_app.models import User
from products_app.models import Product


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    order_date = models.DateTimeField(auto_now_add=True)

    # Address Fields
    shipping_address = models.TextField()  # Add this field
    city = models.CharField(max_length=100)  # Add this field
    state = models.CharField(max_length=100)  # Add this field
    postal_code = models.CharField(max_length=20)  # Add this field
    country = models.CharField(max_length=100)  # Add this field

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"
