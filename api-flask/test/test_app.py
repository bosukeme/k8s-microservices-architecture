import pytest
import os
import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from app import app


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client 

def test_get_datetime(client):
    response = client.get("/")
    assert response.status_code == 200
    data = response.get_json()
    assert "now" in data
    assert "api" in data
    assert data["api"] == "flask"

def test_ping(client):
    response = client.get("/ping")
    assert response.status_code == 200
    assert response.data.decode() == "pong"
