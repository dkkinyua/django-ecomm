from django.db import models

# Create your models here.
# User Model
class User(models.Model):
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=75, unique=True)
    password = models.CharField(max_length=100)
    is_vendor = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=True)

    def __str__(self):
        return self.username
    
# Vendor model
class Vendor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='vendor')
    bio = models.TextField()
    shipping_details = models.TextField()
    return_policy = models.TextField()
    bank_details = models.TextField()

    def __str__(self):
        return self.bio
    
# Category model
class Category(models.Model):
    name = models.CharField(max_length=75)
    slug = models.SlugField(unique=True)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, related_name='subcategories', null=True, blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    slug = models.SlugField(unique=True)
    price = models.FloatField() # If there is an error regarding prices, change this to DecimalField
    stock = models.PositiveIntegerField(default=1)
    name = models.CharField(max_length=75)
    description = models.TextField()
    image = models.ImageField(upload_to='products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now= True)

    def __str__(self):
        return self.name
    
class Order(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='order')
    products = models.ManyToManyField(Product, through='OrderItem')
    total_price = models.FloatField()
    shipping_address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now= True)

    def __str__(self):
        return self.total_price
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cart')
    session_id = models.CharField(max_length=50, null=True, blank=True)
    items = models.ManyToManyField(Product, through='CartItem')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now= True)

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='cart_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

class Shipping(models.Model):
    name = models.CharField(max_length=75)
    description = models.TextField()
    rating = models.FloatField()

    def __str__(self):
        return self.name
    
class Payment(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='payment')
    method = models.CharField(max_length=50)
    amount = models.FloatField()
    transaction_id = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.method
    
class Coupon(models.Model): # For discounts in shop.
    code = models.CharField(max_length=50, unique=True)
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    valid_from = models.DateTimeField()
    valid_to = models.DateTimeField()

    def __str__(self):
        return self.code
    
class Review(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='review')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='review')
    rating = models.PositiveIntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment
    
class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='wishlist')
    products = models.ManyToManyField(Product, related_name='wishlist')


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notification')
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.sent_at
    
class Blog(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_post')
    slug = models.SlugField(unique=True)
    title = models.TextField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now= True)

class FAQ(models.Model):
    question = models.CharField(max_length=75)
    answer = models.TextField()

    def __str__(self):
        return self.question
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=75)
    telephone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Analytics(models.Model):
    sales = models.DecimalField(max_digits=10, decimal_places=2)
    traffic = models.PositiveIntegerField()
    popular_products = models.ManyToManyField(Product, related_name='analytics')
    created_at = models.DateTimeField()

# Site Configuration model
class Configuration(models.Model):
    site_name = models.CharField(max_length=30)
    site_description = models.CharField(max_length=75)
    site_logo = models.ImageField(upload_to='logos')

class Subscription(models.Model):
    email = models.EmailField(unique=True)
    sub_at = models.DateTimeField(auto_now_add=True)
    sub_to = models.DateTimeField()

class Refund(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    reason = models.CharField(max_length=75)
    amount = models.FloatField()
    status = models.TextField()
    requested_at = models.DateTimeField(auto_now_add=True)
    processed_at = models.DateTimeField(null=True, blank=True)
    is_refunded = models.BooleanField(default=False)

    def __str__(self):
        return self.reason
    
class Tax(models.Model):
    name = models.CharField(max_length=75)
    rate = models.DecimalField(max_digits=5, decimal_places=2)
    country = models.CharField(max_length=75)
    state = models.CharField(max_length=75)

    def __str__(self):
        return self.name

