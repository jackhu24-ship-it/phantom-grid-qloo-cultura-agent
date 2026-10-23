 # PHANToM GRID 2.0 // SPEC-QLOO-CULTURA-AGENT
## High-Dimensional Cross-Domain Cultural Taste & Privacy-Preserving Agent Engine

- **Document ID**: `SPEC_Qloo_CultuRa_Agent.md`
- **Target Tournament**: Qloo Agentic AI Hackathon ($25,000 USD + $25,000 JCal)
- **HITL Supreme Sovereign**: Commander Jack Hu (Solo Architect / Final Safety Sovereign)
- **Customs Authority**: Executive Secretary Xiaomi (Office 2)
- **Verification Status**: 4/4 Unit Tests Passed (1.10s) | ZDR: 0.000000 MB Residue

---

## 1. System Overview & Architectural Intent

**PHANToM GRID :: CultuRa Agent** is an industrial-grade autonomous cultural recommendation and cross-domain taste nexus engine. Built upon FastMCP (Model Context Protocol) and the Qloo Cultural API (`/search`, `/v2/tags`, `/v2/insights`), it transforms subjective taste preferences into deterministic mathematical vectors.

### Key Design Principles:
1. **Pure Anonymity**: Zero Personally Identifiable Information (PII) is stored or ingested.
2. **Cross-Domain Transfer**: Synthesizes affinities between disjoint categories (e.g., Cyberpunk Cinema -> Milanese Espresso Culture).
3. **Deterministic Safety Envelope**: Sub-120ms execution budget, strict API rate-limit circuit breaker, and 2-Pass ZDR memory scrubbing.

---

## 2. Four Spec-First Architectural Diagrams

### Figure 1: System Topology & FastMCP Gateway

```mermaid
graph TD
    Client["Autonomous AI Agent<br>(Claude 3.5 / GPT-4 / Gemini)"]
    MCP_Server["FastMCP Gateway Server<br>(query_taste_nexus Tool Protocol)"]
    
    subgraph Track_A ["Track A: 4-Phase Monotonic State Machine"]
        P1["_phase1_ingress()<br>Schema Sanitization & Length Bound (<=512)"]
        P2["_phase2_staging()<br>Token-Bucket Rate Limiter (<80 QPS)"]
        P3["_phase3_compute()<br>Dynamic Confidence Damping Filter (Floor >= 0.65)"]
        P4["_phase4_governance()<br>2-Pass Bitwise ZDR Memory Purge & Audit Receipt"]
    end

    subgraph Track_B ["Track B: High-Dimensional Taste Kernel"]
        Qloo_API["Qloo Cultural API Engine<br>(/search, /v2/tags, /v2/insights)"]
        Damping["Dynamic Damping Operator<br>(Noise Floor Suppression)"]
        Local_Sandbox["Deterministic Offline Mock Sandbox"]
    end

    Client -->|FastMCP Tool Call| MCP_Server
    MCP_Server --> P1
    P1 --> P2
    P2 --> P3
    P3 <-->|Vectorized Query| Qloo_API
    Qloo_API -.->|Fallback / Air-Gapped| Local_Sandbox
    P3 --> Damping
    Damping --> P4
    P4 -->|WORM Audit Proof| Client
```

### Figure 2: End-to-End Query-to-Reasoning Sequence Loop

```mermaid
sequenceDiagram
    autonumber
    actor Judge as Devpost Judge / Agent
    participant MCP as FastMCP Server
    participant State as 4-Phase Runner
    participant Qloo as Qloo Vector Engine
    participant ZDR as Governance Gate

    Judge->>MCP: Call query_taste_nexus(entities, categories)
    MCP->>State: Ingress Validation (Bounds & Signature Check)
    State->>State: Token-Bucket Check (< 80 QPS)
    State->>Qloo: Fetch Cross-Domain Cultural Affinities
    Qloo-->>State: Raw Correlation Matrix
    State->>State: Apply Dynamic Damping (Prune Score < 0.65)
    State->>ZDR: Execute 2-Pass Bitwise Memory Scrub (0xAA -> 0x00)
    ZDR-->>State: Verified 0.000000 MB Residue
    State-->>MCP: Damped Cross-Domain Taste Graph
    MCP-->>Judge: Final JSON Response (< 120ms SLA)
```

### Figure 3: Finite State Machine & Damped Affinity Scoring

```mermaid
stateDiagram-v2
    [*] --> IngressStaging: Ingest Entity Vector
    IngressStaging --> AffinitityExtraction: Compute Cosine Distance
    
    state AffinitityExtraction {
        [*] --> EvaluateScore
        EvaluateScore --> DroppedAsNoise: Score < 0.65 (Hallucination)
        EvaluateScore --> AcceptedSignal: Score >= 0.65 (Valid Affinity)
    }
    
    DroppedAsNoise --> NullSafeSink: Zero Residue Purge
    AcceptedSignal --> GovernanceReceipt: Mint Cultural Insight
    GovernanceReceipt --> [*]: Emit Response
```

### Figure 4: Privacy Margins, SLA Bounds & Hard Trip Circuit Breaker

```mermaid
graph LR
    subgraph IngressEnvelope ["Ingress Bounds"]
        B1["Query String <= 512 Chars"]
        B2["Categories Array <= 8 Domains"]
    end

    subgraph RuntimeEnvelope ["Compute Envelope"]
        B3["Latency Budget < 120ms"]
        B4["Rate Limit <= 80 QPS"]
        B5["Damping Confidence Floor >= 0.65"]
    end

    subgraph GovernanceEnvelope ["ZDR Hard Guard"]
        B6["Memory Scrub: EXACT 0.000000 MB"]
        B7["PII Transmission: STRICT ZERO"]
    end

    IngressEnvelope --> RuntimeEnvelope --> GovernanceEnvelope
```

---

## 3. Table 1: Master Invariant & Defense Matrix

| Phase | Subsystem | Invariant Constraint | Safe Boundary | Hard Trip Breach Action |
| :--- | :--- | :--- | :--- | :--- |
| **Phase 1: Ingress** | FastMCP Gateway | Sanitized Input Schema | Length $\le$ 512 chars | Reject with HTTP 400 Bad Request |
| **Phase 1: Ingress** | Privacy Gate | Zero PII Transmission | 0 Email / Phone matches | Immediate Drop & Security Alert |
| **Phase 2: Staging** | Rate Limiter | Token Bucket Monitor | QPS $\le$ 80 calls/sec | Damped Delay / 429 Prevention |
| **Phase 3: Compute** | Qloo Client | Response Latency Budget | Latency $<$ 120 ms | Fallback to Pre-computed Cache |
| **Phase 3: Compute** | AgentCore | Affinity Confidence Score | Confidence $\ge$ 0.65 | Suppress Vector / Filter Noise |
| **Phase 4: Governance** | ZDR Memory Guard | Residual State Footprint | Residual $==$ 0.000000 MB | 2-Pass Cryptographic Scrub (0xAA -> 0x00) |

---

## 4. Official Verification Verdict

```text
============================== test session starts ==============================
test_qloo_agent.py::test_gate1_latency_sla PASSED                         [ 25%]
test_qloo_agent.py::test_gate2_damping_confidence PASSED                  [ 50%]
test_qloo_agent.py::test_gate3_rate_limit_hard_trip PASSED               [ 75%]
test_qloo_agent.py::test_gate4_zero_pii_and_zdr_scrub PASSED              [100%]
============================== 4 passed in 1.10s ===============================
```