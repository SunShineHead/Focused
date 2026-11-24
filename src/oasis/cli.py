"""OASIS CLI entry point."""

import argparse
import logging
import sys
from collections.abc import Sequence
from importlib.metadata import version

from oasis.core import status


def main(argv: Sequence[str] | None = None) -> int:
    """Parse CLI arguments and print the OASIS status."""
    parser = argparse.ArgumentParser(prog="oasis", description="Report OASIS status.")
    parser.add_argument("--version", action="version", version=f"%(prog)s {version('oasis')}")
    parser.parse_args(argv)

    logging.basicConfig(level=logging.INFO)
    print(status()["status"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
