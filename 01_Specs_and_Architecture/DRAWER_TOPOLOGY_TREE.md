 # PHANToM GRID 2.0 // OFFICIAL REPOSITORY TOPOLOGY SPECIFICATION
## Target Tournament: 202610_Qloo_Agentic_AI_Hackathon ($25,000 USD + JCal $25,000)

- **HITL Supreme Architect**: Commander Jack Hu (Solo HITL Architect)
- **Customs Authority**: Sec Xiaomi (Office 2)
- **Standard**: 100% Aligned with Qloo Official "What to Submit" Requirements

---

### Drawer Topology & Detailed File Registry

```text
202610_Qloo_Agentic_AI_Hackathon/
|-- LICENSE                                         # [MANDATORY] MIT Open source license
|-- README.md                                       # [SSOT GUIDE] Master repo overview & Live Web App
|-- .env.example                                    # [SECURITY] Template for QLOO_API_KEY
|-- .gitignore                                      # [HYGIENE] Filters .env, Python bytecode, cache
|
|-- 01_Specs_and_Architecture/                      # [STEP 1 DRAWER] Architecture whitepapers & diagrams
|   |-- SPEC_Qloo_CultuRa_Agent.md                  # Full 4-Diagram & 1-Table architectural whitepaper
|   |-- DRAWER_TOPOLOGY_TREE.md                     # [THIS FILE] Annotated drawer topology tree
|   `-- mmd/                                        # Raw Mermaid Diagram source drawer
|       |-- 01_taste_nexus_topology.mmd             # [Fig 1] Ingress, FastMCP gateway & Qloo kernel
|       |-- 02_agentic_workflow_seq.mmd             # [Fig 2] End-to-end 8-step query & reasoning sequence
|       |-- 03_affinity_scoring_state.mmd           # [Fig 3] Cultural vector scoring & damping filter
|       |-- 04_privacy_margin_guard.mmd             # [Fig 4] Zero-PII privacy envelope & rate limits
|       `-- 05_master_defense_matrix.md             # [Table 1] Comprehensive system defense matrix
|
|-- 02_SourceCode/                                  # [STEP 2 DRAWER] Double track production codebase
|   |-- main.py                                     # Track A: FastMCP cultural server & 4-phase runner
|   |-- qloo_client.py                              # Track B: Qloo Cultural API client
|   |-- test_qloo_agent.py                          # [STEP 3] 4-Gate atomic closure unit test harness
|   `-- requirements.txt                            # Production dependencies (fastmcp, pydantic, pytest)
|
|-- 03_Live_Demo_Web/                               # [OFFICIAL CRITICAL REQUIREMENT] 0-Cold-Start Live App
|   |-- index.html                                  # Functional web application UI (GitHub Pages ready)
|   |-- app.js                                      # Client-side interactive cultural manifold visualizer
|   `-- style.css                                   # Cyberpunk high-tech dark theme stylesheet
|
|-- 04_CoverImage_16x9/                             # [MEDIA ASSET] Official tournament branding
|   |-- cover_image_16x9.png                        # 1920x1080 Devpost official 16:9 banner
|   `-- cover_design_spec.md                        # Color palette, safe zone margins, and typography
|
|-- 05_Slides_PDF/                                  # [PRESENTATION ASSET] High-density executive deck
|   |-- PHANTOM_GRID_Qloo_Deck.pdf                  # 10-Page 2x2 matrix glowing card pitch deck (Zero Void)
|   `-- pitch_deck_structure.md                     # Slide-by-slide narrative structure
|
|-- 06_SubmissionPackage/                           # [STEP 4 FINAL SUBMISSION] Official submission copy
|   |-- Devpost_Submission_Package.md               # Official 7-Section copy & sponsor tags
|   `-- built_with_tags.txt                         # Pure sponsor tags (qloo-api, fastmcp, python, asil-d)
|
`-- 08_AuditReceipts/                               # [CRYPTOGRAPHIC VAULT] L2 Module invariant ledger
    |-- pitfall_invariant_ledger.json               # SHA-256 sealed WORM ledger containing all pitfalls
    `-- qloo_task_closure_receipt.json              # Step 4 black box verification proof (PG-RECEIPT)