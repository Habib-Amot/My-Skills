import json
from channels.generic.websocket import AsyncWebsocketConsumer

class DepositNotification(AsyncWebsocketConsumer):

    async def connect(self):
        # accept the connection
        self.group_name = "transfers"  # this is just a generic name for pracitce sake
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept() 

    async def receive(self, text_data: str | None = None, bytes_data: bytes | None = None) -> None:
        data = json.loads(str(text_data))
        message = data["message"]
        await self.send_message(message=message)
        

    async def send_message(self, message):
        await self.send(text_data=json.dumps(message))

    async def notify(self, event):
        await self.send(json.dumps(event["payload"]))

