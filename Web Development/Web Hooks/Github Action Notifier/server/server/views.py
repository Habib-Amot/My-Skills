import hashlib
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from utils.hash import verify_hash


@csrf_exempt
def github_webhook_handler(request):
    github_secret_key: str = settings.GITHUB_SECRET_KEY # secrete key used for request verification
    hash_value = request.META.get("HTTP_X_HUB_SIGNATURE_256", "").split("=")[-1]  # get the hash value from the request header
    is_valid = verify_hash(request.body, hash_value, github_secret_key, hashlib.sha256)  # verify the request hash

    print(f"Request is valid: {is_valid}")
    print(f"Star Action: {request.POST['payload']['action']}\nBy: {request.POST['payload']['sender']['login']}\nRepo: {request.POST['payload']['repository']['full_name']}")
    return HttpResponse("it worked")