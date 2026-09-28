# SAEExplainer — EMNLP 2026 project page

A lightweight, responsive research project website for **SAEExplainer: Interpreting SAE Features with Activation-Guided Preference Optimization**.

- Website: https://mndu.github.io/saeexplainer/
- Website repository: https://github.com/mndu/saeexplainer

## Preview

Run `python3 -m http.server 8000` from this directory, then open http://localhost:8000.
No build step or package installation is required.

## Files

- `index.html`: authors, abstract, method, results, qualitative example, and citation.
- `style.css`: responsive layout and print styles.
- `script.js`: accessible BibTeX copying with a manual-copy fallback.
- `assets/framework.webp`: Figure 1 cropped from the supplied paper.
- `1066_SAEExplainer_Interpreting.pdf`: the supplied paper, unchanged.
- `.nojekyll`: serve the static files directly on GitHub Pages.

## Deployment

Publish this directory to a GitHub repository. In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Save and wait for the Pages deployment to finish.

This repository is configured to publish `main` from the root. Future updates only require committing and pushing the changed files; GitHub Pages redeploys automatically.

## Content sources

All authors, affiliations, abstract, method descriptions, and reported numbers come from the supplied PDF. The EMNLP 2026 acceptance status was supplied by the paper's author. The citation omits unknown proceedings details such as page numbers, DOI, and ACL Anthology URL; add these when available.

The result table reproduces the GEN columns of Table 1. The +9.26 percentage-point gain is 53.63 − 44.37. The 76.5% FSSR reduction is reported in Section 4.3. The Dart example comes from Table 2, with the SAEExplainer description explicitly abridged.

Visual references: [Ctrl-X](https://genforce.github.io/ctrl-x/) and [DisCoScene](https://snap-research.github.io/discoscene/), linked from [Bolei Zhou's publications](https://boleizhou.github.io/publications/). The implementation is original; no template code or third-party artwork was copied.

Official research code: https://github.com/he-jingyi/SAEExplainer
