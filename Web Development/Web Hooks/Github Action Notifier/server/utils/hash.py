import hmac

def verify_hash(raw_body: bytes, expected_hash:str, secret_key: str, hash_function) -> bool:
    new_hash = hmac.new(secret_key.encode(), raw_body, hash_function).hexdigest()  # compute new hash based on the request
    return hmac.compare_digest(new_hash, expected_hash )