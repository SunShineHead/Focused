"""Report the OASIS package version and operational status."""

import logging
from importlib.metadata import version
from typing import TypedDict

logger = logging.getLogger(__name__)


class Status(TypedDict):
    """Fields returned by the OASIS status check."""

    version: str
    status: str


def status() -> Status:
    """Return the installed OASIS version and status message."""
    installed_version = version("oasis")
    logger.debug("Reporting status for OASIS %s", installed_version)
    return {"version": installed_version, "status": "OASIS operational"}
