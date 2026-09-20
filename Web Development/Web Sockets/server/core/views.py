from rest_framework import status
from asgiref.sync import async_to_sync
from rest_framework.response import Response
from channels.layers import get_channel_layer
from rest_framework.decorators import api_view

# Create your views here.


@api_view(["POST"])
def transfer_money(request):
    data = request.data.get('amount', "00")
    async_to_sync(get_channel_layer().group_send)(group='transfers', message={"type": "notify", "payload": {"data": data}})
    return Response(data={'text': "hello world"}, status=status.HTTP_200_OK)
