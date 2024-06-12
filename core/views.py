from django.shortcuts import render
from rest_framework import viewsets

from .serializers import (UserSerializer, VendorSerializer, OrderSerializer, OrderItemSerializer, CartSerializer, CartItemSerializer, ProductSerializer, PaymentSerializer, ShippingSerializer, BlogSerializer, CouponSerializer, ConfigurationSerializer, ContactSerializer, AnalyticsSerializer, FAQSerializer, TaxSerializer, SubscriptionSerializer, NotificationSerializer, ReviewSerializer, RefundSerializer, WishlistSerializer)

from .models import (User, Vendor, Product, Order, Category, Cart, CartItem, OrderItem, Payment, Analytics, FAQ, Shipping, Coupon, Refund, Review, Blog, Configuration, Contact, Wishlist, Subscription, Notification, Tax)

# Create your views here.
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

