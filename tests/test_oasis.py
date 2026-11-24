"""Tests for the OASIS command line."""

from importlib.metadata import version

import pytest

from oasis.cli import main


def test_cli_prints_status(capsys):
    assert main([]) == 0
    assert capsys.readouterr().out == "OASIS operational\n"


def test_cli_prints_version(capsys):
    with pytest.raises(SystemExit) as exit_info:
        main(["--version"])

    assert exit_info.value.code == 0
    assert capsys.readouterr().out == f"oasis {version('oasis')}\n"


def test_cli_rejects_unknown_arguments(capsys):
    with pytest.raises(SystemExit) as exit_info:
        main(["--unknown"])

    assert exit_info.value.code == 2
    assert "unrecognized arguments: --unknown" in capsys.readouterr().err
