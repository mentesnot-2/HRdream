"""
Local development: DEBUG on, permissive hosts, CORS for next.js dev server.
"""

import os

from .base import *

DEBUG = True

ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

# Prefer SECRET_KEY from environment or .env loader you add later; fallback for local only.
SECRET_KEY = os.environ.get(
    "SECRET_KEY",
    "django-insecure-+*h)gbtl(&^51sr2lg)(07&eko(*(i^tcnw-igm2j+zd^btz)e",
)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

