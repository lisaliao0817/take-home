import jwt
from flask import current_app
from datetime import datetime, timedelta

def encode_auth_token(user_id):
    """
    Generates the Auth Token.

    Parameters:
        user_id (str): The user id.
    Returns:
        str: Encoded token.
    """
    try:
        payload = {
            'exp': datetime.utcnow() + timedelta(minutes=30),
            'iat': datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(
            payload,
            current_app.config.get('SECRET_KEY'),
            algorithm='HS256'
        )
    except Exception as e:
        return e

def decode_auth_token(auth_token):
    """
    Decodes the auth token.

    Parameters:
        auth_token (str): The auth token.

    Returns:
        str: Decoded payload or error message.
    """
    try:
        payload = jwt.decode(auth_token, current_app.config.get('SECRET_KEY'), algorithms=['HS256'])
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'