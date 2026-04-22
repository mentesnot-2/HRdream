"""
Production: no insecure defaults; requires environment variables.
"""

import os

import environ
from .base import *

env = environ.Env()

DEBUG = str(os.environ.get("DEBUG", "false")).lower() in ("1", "true", "yes")
SECRET_KEY = os.environ["SECRET_KEY"]
ALLOWED_HOSTS = [
    h.strip() for h in os.environ.get("ALLOWED_HOSTS", "").split(",") if h.strip()
]

DATABASES = {
    "default": env.db(),
}

_cors = os.environ.get("CORS_ALLOWED_ORIGINS", "")
CORS_ALLOWED_ORIGINS = [o.strip() for o in _cors.split(",") if o.strip()]