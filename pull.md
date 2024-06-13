# Creation of serializers and addition of *Tax* and *Contact* models
1. **Creation of serializers**
What's a serializer? In the context of Django REST Framework (DRF), a serializer is a component that is used to transform complex data types, such as Django models or querysets, into native Python data types. These native data types can then be easily rendered into JSON, XML, or other content types suitable for APIs. Conversely, serializers can also transform parsed data back into complex types, after validating the input.

Serializers for different models have been created to be able to parse the data into JSON format, for example,
```python

from rest_framework import serializers
from .models import User, Review

# A user serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# A product serializer
class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Review
        fields = '__all__'


```
For the ReviewSerializer, there is a *user* variable. This user variable extends the UserSerializer to be shown on the ReviewSerializer as read only, meaning that you cannot deserialize it.

2. **Addition of the *Tax* and *Contact* models**:
Check core/models.py for more information. 
