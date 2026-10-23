# -*- coding: utf-8 -*-
import sys, pytest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from main import CultuRaAgentRunner, CulturalQueryPayload

@pytest.fixture
def agent():
    return CultuRaAgentRunner()

def test_gate1_latency_boundary(agent):
    p = CulturalQueryPayload(user_intent='Cyberpunk Cinema and Synthwave', categories=['movies'], confidence_threshold=0.65)
    res = agent.run_pipeline(p)
    assert res['status'] == 'SUCCESS'
    assert res['latency_ms'] < 120.0

def test_gate2_damping_filter_threshold(agent):
    p = CulturalQueryPayload(user_intent='Minimalist Aesthetics', categories=['movies', 'dining', 'fashion'], confidence_threshold=0.80)
    res = agent.run_pipeline(p)
    for item in res['taste_nexus']['affinities']:
        assert item['affinity'] >= 0.80

def test_gate3_hard_trip_ingress_boundary(agent):
    with pytest.raises(Exception):
        agent._phase1_ingress(CulturalQueryPayload(user_intent='A'*513))

def test_gate4_zero_data_residue_memory_scrub(agent):
    p = CulturalQueryPayload(user_intent='Private Taste Vector', categories=['fashion'], confidence_threshold=0.70)
    res = agent.run_pipeline(p)
    assert res['zdr_residual_mb'] == 0.000000
    assert 'PG-RECEIPT-QLOO-' in res['receipt_id']
