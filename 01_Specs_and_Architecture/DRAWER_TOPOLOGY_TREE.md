 # PHANToM GRID 2.0 // OFFICIAL REPOSITORY TOPOLOGY SPECIFICATION
# Target Tournament: 202610_Qloo_Agentic_AI_Hackathon ($25,000 USD + JCal $25,000)
# Ratified by: Commander Jack Hu (Solo HITL Architect) x Sec Xiaomi (Office 2)
# Standard: 100% Aligned with Qloo Official "What to Submit" Requirements

================================================================================
DRAWER TOPOLOGY & DETAILED FILE REGISTRY
================================================================================

202610_Qloo_Agentic_AI_Hackathon/
|-- LICENSE                                          # [MANDATORY] MIT Open-source license (GitHub auto-detects & displays license badge)
|-- README.md                                        # [SSOT GUIDE] Master repo overview, architecture diagrams, Qloo API docs & quickstart
|-- .env.example                                     # [SECURITY] Template for QLOO_API_KEY and endpoints (Strictly blocks secret leakage)
|-- .gitignore                                       # [HYGIENE] Filters real .env, Python bytecode (__pycache__), and local caches
|
|-- 01_Specs_and_Architecture/                       # [STEP 1 DRAWER] Architecture whitepapers and raw vector diagrams
|   |-- SPEC_Qloo_CultuRa_Agent.md                   # Full 4-Diagram & 1-Table architectural whitepaper with mathematical proof
|   |-- DRAWER_TOPOLOGY_TREE.md                      # [THIS FILE] Annotated drawer topology tree & tournament asset checklist
|   `-- mmd/                                         # Raw Mermaid Diagram source drawer for high-resolution vector rendering
|       |-- 01_taste_nexus_topology.mmd              # [Fig 1] Ingress, FastMCP gateway & Qloo reasoning kernel topology (graph TD)
|       |-- 02_agentic_workflow_seq.mmd              # [Fig 2] End-to-end 8-step cultural taste query & reasoning sequence (sequenceDiagram)
|       |-- 03_affinity_scoring_state.mmd            # [Fig 3] Cultural vector scoring, damping filter & circuit trip states (stateDiagram-v2)
|       |-- 04_privacy_margin_guard.mmd              # [Fig 4] Zero-PII privacy envelope, rate limits & ZDR safety boundary (graph LR)
|       `-- 05_master_defense_matrix.md              # [Table 1] Comprehensive system defense, resource limits & recovery matrix
|
|-- 02_SourceCode/                                   # [STEP 2 DRAWER] Double-track production codebase & atomic tests
|   |-- main.py                                      # Track A: FastMCP cultural server & 4-phase deterministic state machine runner
|   |-- qloo_client.py                               # Track B: Qloo Cultural API client (/search, /v2/tags, /v2/insights)
|   |-- test_qloo_agent.py                           # [STEP 3] 4-Gate atomic closure unit test harness (Gate 1~4 all green pass)
|   `-- requirements.txt                             # Production dependencies (fastmcp, httpx, pydantic, pytest)
|
|-- 03_Live_Demo_Web/                                # [OFFICIAL CRITICAL REQUIREMENT] 0-Cold-Start external hosted live app
|   |-- index.html                                   # Functional web application UI (Directly deployable to GitHub Pages / Vercel)
|   |-- app.js                                       # Client-side interactive cultural manifold visualizer and API orchestrator
|   `-- style.css                                    # Cyberpunk high-tech dark theme stylesheet (100% responsive layout)
|
|-- 04_CoverImage_16x9/                              # [MEDIA ASSET] Official tournament branding and visual identity
|   |-- cover_image_16x9.png                         # 1920x1080 Devpost official 16:9 banner with amber/cyan neon styling
|   `-- cover_design_spec.md                         # Color palette, safe zone margins, and typography layout geometry spec
|
|-- 05_Slides_PDF/                                   # [PRESENTATION ASSET] High-density executive pitch deck
|   |-- PHANTOM_GRID_Qloo_Deck.pdf                   # 10-Page 2x2 matrix glowing card vector presentation deck (Zero void)
|   `-- pitch_deck_structure.md                      # Slide-by-slide narrative structure aligning with official judging criteria
|
|-- 06_SubmissionPackage/                            # [STEP 4 FINAL SUBMISSION] Official submission copy & sponsor tags
|   |-- Devpost_Submission_Package.md                # Official 7-Section copy (Inspiration, What it does, How we built it, etc.)
|   `-- built_with_tags.txt                          # Pure sponsor tags ([qloo-api], [fastmcp], [python], [autonomous-agents])
|
`-- 08_AuditReceipts/                                # [CRYPTOGRAPHIC VAULT] L2 Module invariant ledger and task receipts
    |-- pitfall_invariant_ledger.json                # SHA-256 sealed WORM ledger containing all 34 pitfalls & 4 personnel decrees
    `-- qloo_task_closure_receipt.json               # Step 4 black-box verification proof (PG-RECEIPT-QLOO-TASK-0x...)