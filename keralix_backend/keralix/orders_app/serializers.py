from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            "id",
            "user",
            "product",
            "quantity",
            "total_price",
            "shipping_address",
            "city",
            "state",
            "postal_code",
            "country",
            "order_date",
        ]
        read_only_fields = ("user", "order_date", "total_price")

    def create(self, validated_data):
        # Calculate total price before saving
        product = validated_data.get("product")
        quantity = validated_data.get("quantity")
        total_price = (
            product.price * quantity
        )  # Assuming the Product model has a price field
        validated_data["total_price"] = total_price
        return super().create(validated_data)
