"""
ASGI config for server project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from websocket_routes.websocket_routing import websocket_routes

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')


application = ProtocolTypeRouter(
    {
        "http" : get_asgi_application(),
        "websocket": URLRouter(websocket_routes)
    }
)
