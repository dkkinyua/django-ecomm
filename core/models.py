from django.db import models

# Create your models here.
# User Model
class User(models.Model):
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=75, unique=True)
    password = models.CharField()
    is_vendor = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=True)

    def __str__(self):
        return self.username
    
# Vendor model
class Vendor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='users')
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
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, related_name='vendor')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category')
    slug = models.SlugField(unique=True)
    price = models.FloatField()
    stock = models.PositiveIntegerField(default=1)
    name = models.CharField(max_length=75)
    description = models.TextField()
    image = models.ImageField(upload_to='products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now= True)

    def __str__(self):
        return self.name