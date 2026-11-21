# Focused OASIS Platform

Focused is a lightweight Python application built around the OASIS project. The current implementation provides a small, installable package and command-line status check, with a foundation for future OASIS capabilities.

> **Integration status:** This repository currently contains a minimal OASIS package scaffold. It does not yet include or claim to implement the full upstream OASIS ontology or platform. Upstream pull requests [#34](https://github.com/dfsantamaria/OASIS/pull/34) and [#37](https://github.com/dfsantamaria/OASIS/pull/37) were reviewed as references for development automation; their changes have not been merged into this repository.

## Current capabilities

- Installable Python package using a `src/` layout.
- `oasis` command-line entry point that reports the application status.
- Unit tests for the status function and CLI output.
- GitHub Actions CI and CodeQL workflows in `.github/workflows/`.
- Dependabot configuration for Python dependencies and GitHub Actions.

## Requirements

- Python 3.10 or later
- pip

## Install

From the repository root, install in editable mode:

```bash
python -m pip install -e ".[dev]"
```

For a standard installation without development tools:

```bash
python -m pip install .
```

## Run

After installation, run:

```bash
oasis
```

Expected output:

```text
OASIS operational
```

## Test and quality checks

Run the test suite with:

```bash
python -m pytest
```

The project also configures Ruff, Black, build, and dependency-audit tools in its development dependencies. When installed, run the checks with:

```bash
ruff check .
black --check .
python -m build
python -m pip_audit
```

GitHub Actions runs CI for changes to `main` and pull requests targeting `main`. CodeQL workflows provide security analysis for Python and GitHub Actions code.

## Project structure

```text
src/oasis/       Python package and CLI
 tests/          Automated tests
 .github/        Dependabot and GitHub Actions configuration
 pyproject.toml  Package metadata and development tooling
```

## Development principles

OASIS-related enhancements should be introduced incrementally and reviewed before merging. Changes should preserve the existing package and test layout, use correctly located workflow and project files, and include tests for new behavior. Security and quality checks must fail visibly when they detect a problem; avoid bypassing failures with unconditional `|| true` commands or enabling automatic merges without adequate validation.

Before adopting upstream OASIS components, verify their compatibility, licensing, provenance, and expected behavior, then document what is integrated and how it is tested.

## Contributing

1. Create a focused branch for the change.
2. Add or update tests alongside behavior changes.
3. Run the tests and relevant quality checks locally.
4. Open a pull request describing the motivation, implementation, and validation performed.
5. Merge only after required checks and review are complete.

## License

No license is currently declared for this repository. Confirm licensing before redistributing this project or incorporating upstream code and assets.
