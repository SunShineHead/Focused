"""Tests for the OASIS status API."""

from importlib.metadata import version

from oasis.core import status


def test_status():
    assert status() == {"version": version("oasis"), "status": "OASIS operational"}
