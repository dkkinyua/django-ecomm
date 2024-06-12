# To hold the serializers for our models
from rest_framework import serializers
from .models import (User, Vendor, Product, Order, Category, Cart, CartItem, OrderItem, Payment, Analytics, FAQ, Shipping, Coupon, Refund, Review, Blog, Configuration, Contact, Wishlist, Subscription)

# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    vendor = VendorSerializer(read_only=True)
    reviews = serializers.StringRelatedField(many=True, read_only=True)
    
    class Meta:
        model = Product
        fields = '__all__'


