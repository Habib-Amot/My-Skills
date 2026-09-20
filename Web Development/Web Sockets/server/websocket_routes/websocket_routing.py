from django.urls import re_path
from .consumers import DepositNotification

websocket_routes = [
    re_path(r"^ws/app/api/deposit_alert$", DepositNotification.as_asgi()),  # type: ignore
]
