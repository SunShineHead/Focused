"""Regression tests for the OASIS status command."""

from oasis.cli import main
from oasis.core import status


def test_status():
    assert status() == "OASIS operational"


def test_cli_prints_status(capsys):
    main()
    assert capsys.readouterr().out == "OASIS operational\n"
