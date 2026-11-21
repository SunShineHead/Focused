# Focused

A focused Python application and development scaffold inspired by the **Ontology for Agents, Systems, and Integration of Services (OASIS)**.

> **Project status:** Focused currently contains a small Python package and command-line status check. It is not the upstream OASIS ontology, does not implement OASIS `BehaviorManager`, and does not yet generate agents or behaviors. The references and research material below describe the upstream project and possible future integration; they are not claims of implemented functionality or affiliation.

## Repository relationships

- **Upstream project:** [dfsantamaria/OASIS](https://github.com/dfsantamaria/OASIS)
- **SunShineHead fork:** [SunShineHead/OASIS](https://github.com/SunShineHead/OASIS)
- **Related project:** [SunShineHead/Focused](https://github.com/SunShineHead/Focused)

The SunShineHead fork is a public fork of the upstream repository on its `main` branch. It is retained as an upstream reference and integration candidate—not as an asset copied into Focused. Commits from upstream should be evaluated independently before synchronization or reuse.

## About OASIS

OASIS is an ontology for representing agents, systems, and service integration. The upstream project describes applications including agent behavior and template modeling:

- [CLARA](https://github.com/dfsantamaria/CLARA)
- [POC4COMMERCE](https://github.com/dfsantamaria/POC4COMMERCE)

## Licensing and provenance

The upstream OASIS materials supplied for this project state that the code is distributed under **GPL-3.0-or-later**. Copyright is attributed to Giampaolo Bella, Domenico Cantone, Marianna Nicolosi Asmundo, and Daniele Francesco Santamaria. Copyright and redistribution notices must be preserved when upstream material is incorporated.

Focused is independently maintained and its own source is distributed under the **BSD 3-Clause License**. GitHub license metadata alone does not replace the upstream license text or determine the terms of third-party files. The two licenses must not be conflated:

- Fork provenance does not transfer upstream rights or relicense upstream code.
- BSD licensing applies to Focused-authored code unless another license is explicitly identified.
- GPL-covered upstream files retain their GPL obligations, including source availability and notice requirements, if redistributed with or as part of a derivative work.
- Ontology assets, publications, and bundled third-party components must be checked individually for copyright and reuse terms.

No upstream OASIS code or ontology files are included solely by this documentation update. Before copying or integrating upstream material, retain a source commit or tag, verify its license text, document provenance, and run a license-compliance and compatibility review.

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

CI should test all supported Python versions and run quality and package checks. CodeQL is intended to analyze Python code and GitHub Actions workflows; active configuration is maintained under `.github/workflows/`.

## OASIS concepts and future integration

The upstream repository documents RDFLib ontology objects for behavior, template, and data ontologies, and a `BehaviorManager` workflow for creating agent templates, behaviors, and agents. Those APIs belong to the upstream project and are **not currently available in Focused**.

Any future integration should:

1. Identify and pin an upstream commit, tag, and source repository.
2. Preserve upstream copyright, GPL notice, and license text.
3. Review GPL compatibility and distribution obligations with project maintainers.
4. Verify API behavior and ontology provenance against upstream documentation and tests.
5. Add a minimal, independently tested adapter or integration module.
6. Document imported files, their versions, their licenses, and reproducible validation steps.

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

Consult the upstream repositories and publisher records for authoritative versions, complete author information, and citation details.

## Security and responsible disclosure

Do not include credentials, private data, or model weights in commits. Review dependencies and third-party licenses before use. Report suspected vulnerabilities privately through **Security → Report a vulnerability** on GitHub when available. If private reporting is unavailable, contact the repository owner privately; do not publish exploitable details in a public issue.

Include the affected version, potential impact, concise reproduction details, and affected component. Avoid accessing or changing data that is not yours.

Focused does not claim affiliation with Meta or the Llama project, SLSA compliance, security certification, or an audit. Any future Llama-related integration must comply with the applicable model license and acceptable-use terms. No verified SLSA provenance is currently published for Focused.

## Contributing

1. Create a focused branch for each change.
2. Add or update tests alongside behavior changes.
3. Run tests and applicable quality checks locally.
4. Open a pull request describing the motivation, changes, and validation performed.
5. Merge only after required checks and review are complete.

## License

Focused-authored code is distributed under the [BSD 3-Clause License](LICENSE). Third-party works remain subject to their own licenses and notices. No upstream license grant should be inferred from this repository's license.
