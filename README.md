# Focused OASIS Platform

Focused OASIS is a Python package with a command-line entry point for checking the platform's operational status.

## Requirements

- Python 3.10 or newer
- pip

## Installation

From the repository root:

```bash
python -m pip install -e .
```

For a standard (non-editable) installation:

```bash
python -m pip install .
```

## Usage

```bash
oasis
```

Expected output:

```text
OASIS operational
```

## Development

Install the optional development tools:

```bash
python -m pip install -e ".[dev]"
```

Run tests when present:

```bash
python -m pytest
```

Note: pytest exits with code 5 if no tests are collected. This does not indicate an installation failure.

## Package layout

- `src/oasis/__init__.py`: Python package
- `src/oasis/cli.py`: `oasis` command-line entry point
- `src/oasis/core.py`: operational status function
- `pyproject.toml`: build metadata and development dependencies

The package uses setuptools' automatic `src/` layout discovery, without an explicit `package-dir` override.

## Packaging verification

```bash
python -m pip install --upgrade build
python -m build
python -m pip install -e .
oasis
```

The build should produce a source distribution and wheel under `dist/`. The installed command should print `OASIS operational`.
