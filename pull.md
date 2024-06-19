# Registered models to the admin panel and updated the settings file
**1. Registered models to the admin panel**
The admin panel is provided in Django for the site admin / superuser can change, add, or edit things on the site even if they do not have any technical experience in Django or programming in general. The admin panel can be accessed through the following endpoint *http:localhost:8000/admin* in development or if the site is live, *www.example.com/admin* if the website is built on Python's Django framework. 

**NOTE: Use proper authentication and authorization procedures to protect and prevent unauthorized users from accessing the admin panel without proper permissions!**

So as to add, edit and make changes to the application, we need to register our models. To register these models to the admin panel, head over to *core/admin.py* file and do the following

- Import necessary modules and packages:
```python

from django.contrib import admin
from models import User, Vendor # An example of the models, they are too many

```

- Register the models using the ```register()``` function:

```python

from django.contrib import admin
from models import User, Vendor

admin.site.register(User)
admin.site.register(Vendor)

```

- So as to access the admin panel from our browser using this endpoint *localhost:8000/admin*, we need to register this endpoint as an URL in *project/urls.py*:
```python

from django.urls import path, include

urlpatterns = [
    path('admin/', include(router.urls)),
]

```
