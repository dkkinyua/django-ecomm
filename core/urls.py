from django.urls import path, include
from rest_framework import routers
from .views import (UserViewset, VendorViewset, CategoryViewset, OrderViewset, OrderItemViewset, CartViewset, CartItemViewset, ProductViewset, PaymentViewset, ShippingViewset, WishlistViewset, ReviewViewset, FAQViewset, BlogViewset, ContactViewset, NotificationViewset, ConfigurationViewset, CouponViewset, AnalyticsViewset, TaxViewset, RefundViewset, SubscriptionViewset)

router = routers.DefaultRouter() # check this method
router.register(r'users', UserViewset)
router.register(r'vendor', VendorViewset)
router.register(r'categories', CategoryViewset)
router.register(r'order', OrderViewset)
router.register(r'order-items', OrderItemViewset)
router.register(r'cart', CartViewset)
router.register(r'cart-items', CartItemViewset)
router.register(r'products', ProductViewset)
router.register(r'payments', PaymentViewset)
router.register(r'shippings', ShippingViewset)
router.register(r'wishlists', WishlistViewset)
router.register(r'reviews', ReviewViewset)
router.register(r'faqs', FAQViewset)
router.register(r'blog', BlogViewset)
router.register(r'contacts', ContactViewset)
router.register(r'notifications', NotificationViewset)
router.register(r'configurations', ConfigurationViewset)
router.register(r'coupons', CouponViewset)
router.register(r'analytics', AnalyticsViewset)
router.register(r'taxes', TaxViewset)
router.register(r'refunds', RefundViewset)
router.register(r'subscriptions', SubscriptionViewset)


urlpatterns = [
    path('api/', include(router.urls)),
]