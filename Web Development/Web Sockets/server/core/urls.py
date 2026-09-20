from django.urls import path
from .views import transfer_money

urlpatterns = [
    path('deposit', view=transfer_money)
]
