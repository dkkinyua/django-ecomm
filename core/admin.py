from django.contrib import admin
from .models import (User, Vendor, Product, Order, Category, Cart, CartItem, OrderItem, Payment, Analytics, FAQ, Shipping, Coupon, Refund, Review, Blog, Configuration, Contact, Wishlist, Subscription, Notification, Tax)
# Register your models here.
admin.site.register(User)
admin.site.register(Vendor)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(OrderItem)
admin.site.register(Payment)
admin.site.register(Analytics)
admin.site.register(FAQ)
admin.site.register(Shipping)
admin.site.register(Coupon)
admin.site.register(Refund)
admin.site.register(Review)
admin.site.register(Blog)
admin.site.register(Subscription)
admin.site.register(Contact)
admin.site.register(Tax)
admin.site.register(Notification)
admin.site.register(Configuration)
admin.site.register(Wishlist)