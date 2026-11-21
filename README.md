# Focused

A focused Python application and development scaffold inspired by the **Ontology for Agents, Systems, and Integration of Services (OASIS)**.

> **Project status:** Focused currently contains a small Python package and command-line status check. It is not the upstream OASIS ontology, does not implement OASIS `BehaviorManager`, and does not yet generate agents or behaviors. The examples and research references below describe the upstream project and possible future integration; they are not claims of implemented functionality or affiliation.

## About OASIS

OASIS is an ontology for representing agents, systems, and service integration. The upstream project describes applications including agent behavior and template modeling. Its repository and licensing terms are maintained separately from Focused:

- [Upstream OASIS repository](https://github.com/dfsantamaria/OASIS)
- [OASIS-related projects: CLARA](https://github.com/dfsantamaria/CLARA)
- [OASIS-related projects: POC4COMMERCE](https://github.com/dfsantamaria/POC4COMMERCE)

The upstream material supplied for this project identifies the OASIS code as **GPL-3.0-or-later**. Focused's own code is separately licensed under the BSD 3-Clause License. No upstream OASIS code, ontology files, or other GPL-covered assets are included in this repository by this documentation change. Before integrating or redistributing upstream material, review the exact upstream license and compatibility obligations, preserve required notices, and document the files and provenance. Do not assume that this repository's BSD license changes the terms for third-party material.

## Current capabilities

- Installable Python package using a `src/` layout.
- `oasis` command-line entry point that reports application status.
- Automated tests for the package and CLI.
- GitHub Actions CI and CodeQL workflow configuration.
- Dependabot configuration for Python dependencies and GitHub Actions.

## Requirements

- Python 3.13 or later
- pip

## Install and run

Install the package and development tools from the repository root:

```bash
python -m pip install -e ".[dev]"
```

Run the CLI:

```bash
oasis
```

Expected output:

```text
OASIS operational
```

## Development checks

```bash
python -m pytest
ruff check .
black --check .
python -m build
python -m pip_audit
```

The CI workflow should test the supported Python matrix and run the quality and package checks. CodeQL is intended to analyze Python code and GitHub Actions workflows; review `.github/workflows/` for the active configuration.

## OASIS concepts and future integration

The upstream OASIS repository documents RDFLib ontology objects for behavior, template, and data ontologies, and a `BehaviorManager` workflow for creating agent templates, behaviors, and agents. Those APIs belong to the upstream project and are **not currently available in Focused**. Any future integration should:

1. Identify and pin the upstream source and version.
2. Review the upstream GPL license and compatibility with this project's licensing and distribution plans.
3. Verify API behavior and ontology provenance against upstream documentation and tests.
4. Add a minimal, independently tested adapter or integration module without copying code until licensing review is complete.
5. Document which upstream components are used, their license notices, and how to reproduce the integration.

## Selected OASIS research

These publications are listed as background references, not as publications authored by or contributions from Focused:

- Bella, Cantone, Nicolosi-Asmundo, and Santamaria, “The Ontology for Agents, Systems and Integration of Services: recent advancements of OASIS,” WOA 2022, CEUR Workshop Proceedings, vol. 3261, pp. 176–193.
- Bella, Cantone, Longo, Nicolosi-Asmundo, and Santamaria, “Blockchains through ontologies: the case study of the Ethereum ERC721 standard in OASIS,” *Intelligent Distributed Computing XIV*, Studies in Computational Intelligence 1026, ch. 23, pp. 249–259.
- Bella, Cantone, Longo, Nicolosi-Asmundo, and Santamaria, “Semantic Representation as a Key Enabler for Blockchain-Based Commerce,” GECON 2021, Lecture Notes in Computer Science 13072, pp. 191–198.
- Cantone, Longo, Nicolosi-Asmundo, Santamaria, and Santoro, “Ontological Smart Contracts in OASIS: Ontology for Agents, Systems, and Integration of Services,” *Intelligent Distributed Computing XIV*, Studies in Computational Intelligence 1026, ch. 22, pp. 237–247.
- Cantone, Longo, Nicolosi-Asmundo, Santamaria, and Santoro, “Towards an Ontology-Based Framework for a Behavior-Oriented Integration of the IoT,” WOA 2019, CEUR Workshop Proceedings, vol. 2404, pp. 119–126.
- Bella, Castiglione, and Santamaria, “A Behaviouristic Approach to Representing Processes and Procedures in the OASIS 2 Ontology,” CEUR Workshop Proceedings 3637 (2023).
- Bella, Cantone, Longo, Nicolosi-Asmundo, and Santamaria, “The ontology for agents, systems and integration of services: OASIS version 2,” *Intelligenza Artificiale* 17(1), pp. 51–62 (2023).
- Bella, Cantone, Castiglione, Nicolosi-Asmundo, and Santamaria, “A behaviouristic semantic approach to blockchain-based e-commerce,” *Semantic Web* 15(5), pp. 1863–1914 (2024), [doi:10.3233/SW-243543](https://doi.org/10.3233/SW-243543).
- Bella, Cantone, Nicolosi-Asmundo, and Santamaria, “Towards a semantic blockchain: A behaviouristic approach to modelling Ethereum,” *Applied Ontology* 19(2), pp. 143–180 (2024), [doi:10.3233/AO-230010](https://doi.org/10.3233/AO-230010).

Please consult the upstream OASIS repository and publisher records for authoritative versions, full author information, and citation details.

## Security and responsible disclosure

Do not include credentials, private data, or model weights in commits. Review dependencies and third-party licenses before use. Report suspected vulnerabilities privately through **Security → Report a vulnerability** on GitHub when available. If private reporting is unavailable, contact the repository owner privately; do not post exploitable details in a public issue. Include the affected version, potential impact, and concise reproduction details, and avoid accessing or changing data that is not yours.

Focused does not claim affiliation with Meta or the Llama project, SLSA compliance, security certification, or an audit. Any future Llama-related integration must comply with the applicable model license and acceptable-use terms. SLSA is a supply-chain security framework; no verified SLSA provenance is currently published for Focused.

## Contributing

1. Create a focused branch for each change.
2. Add or update tests alongside behavior changes.
3. Run the tests and relevant quality checks locally.
4. Open a pull request describing the motivation, changes, and validation performed.
5. Merge only after required checks and review are complete.

## License

Focused's own code is distributed under the [BSD 3-Clause License](LICENSE). Third-party works remain subject to their own licenses and notices. No license grant for upstream OASIS materials should be inferred from Focused's license.
