from oasis.core import status

def test_status():
    assert status() == "OASIS operational"
