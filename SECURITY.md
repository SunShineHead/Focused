# Security Policy

The Focused project welcomes responsible security research. This policy describes how to report suspected vulnerabilities and how maintainers intend to coordinate investigation and remediation. It applies to this repository and its officially published releases.

This policy is informed by coordinated vulnerability disclosure practices in ISO/IEC 29147:2018 and vulnerability-handling practices in ISO/IEC 30111:2019, together with NIST SP 800-216 and the NIST Cybersecurity Framework (CSF) 2.0. Referencing these documents does not mean the project is certified or formally compliant with them.

## Supported versions

Security fixes are prioritized for the latest released version and the current default branch. Older releases may not receive security updates; upgrade to the latest release where possible. If you are unsure whether a version is affected, include its version or commit identifier in your report.

## Reporting a vulnerability

**Please do not report suspected vulnerabilities in public issues, discussions, pull requests, or other public channels.**

Use [GitHub's private vulnerability reporting for this repository](https://github.com/SunShineHead/Focused/security/advisories/new) to submit a report. If private vulnerability reporting is unavailable, contact the repository maintainers privately through GitHub and ask for a secure reporting channel; do not include exploit details in a public message.

Please include, when available:

- A concise description of the potential vulnerability and its impact.
- The affected version, branch, commit, component, or configuration.
- Reproduction steps or a minimal proof of concept that is safe and limited to this project.
- Any relevant logs, screenshots, or suggested mitigations, with secrets and personal data removed.
- Your preferred name or handle and a way to follow up. Anonymous reports are welcome.

Please give maintainers a reasonable opportunity to investigate and coordinate a fix before publicly disclosing the issue. Do not access, modify, or disrupt other people's data or services, and do not perform testing against systems you do not own or have explicit permission to test.

## What to expect

- Maintainers aim to acknowledge a report within **5 business days**.
- We aim to provide an initial assessment and, where possible, an estimated next step within **10 business days** of acknowledgment.
- We will endeavor to share status updates at least every **10 business days** while the report is actively being handled.
- We will coordinate disclosure timing with the reporter, taking into account severity, exploitability, user impact, and the availability of an effective fix or mitigation.

These are response goals, not guaranteed service levels. Investigation and remediation timelines depend on report quality, complexity, maintainer availability, and the risk to users. If you have not received a response, please follow up privately through GitHub.

## Handling and disclosure

Maintainers will make reasonable efforts to acknowledge and validate reports, assess impact, coordinate a fix or mitigation, and communicate resolution. When appropriate, a public advisory will describe affected versions, severity and impact, mitigations, and fixed versions. Reporter credit will be provided only with the reporter's consent. We may decline reports that are out of scope, not reproducible, or do not present a security risk, and will explain that decision where practical.

Please avoid publishing details that would put users at risk before a coordinated disclosure. If a vulnerability is being actively exploited or presents an imminent risk, tell maintainers in the private report so urgency can be assessed.

## Scope and limitations

This policy covers security vulnerabilities in code and artifacts maintained and distributed by this repository. It does not authorize testing against third-party services, infrastructure, user accounts, or data. It is not a bug bounty program, does not promise compensation, and does not provide legal safe-harbor guarantees. Researchers remain responsible for complying with applicable laws and third-party terms.

## Reference guidance

- [ISO/IEC 29147:2018 — Vulnerability disclosure](https://www.iso.org/standard/72311.html)
- [ISO/IEC 30111:2019 — Vulnerability handling processes](https://www.iso.org/standard/69725.html)
- [NIST SP 800-216 — Recommendations for Federal Vulnerability Disclosure Guidelines](https://csrc.nist.gov/pubs/sp/800/216/final)
- [NIST Cybersecurity Framework (CSF) 2.0](https://www.nist.gov/cyberframework)
- [GitHub documentation — About repository security advisories](https://docs.github.com/en/code-security/security-advisories)
