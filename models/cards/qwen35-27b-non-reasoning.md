---
type: Model
title: Qwen3.5 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.51
output_speed_tps: 20.2997070935981
context_window: 262144
status: past
size_class: Small
params_b: 27.8
is_reasoning: false
radar:
  knowledge: { s: 56.7, z: 0.48, r: 57.3, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: -0.02, r: 49.8, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 68.1, z: 0.74, r: 61.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.13, r: 52.0, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 48.9, z: -0.06, r: 49.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.5 27B (non-reasoning)

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 20.2997070935981 t/s · TTFT 13.3388221768139s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.3 | +0.48 | 실측 | [[gpqa-diamond]] 84.2424%×0.4, [[humanitys-last-exam]] 13.9481%×0.3 |
| 추론 | 49.8 | -0.02 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 84.2424%×1.0, [[humanitys-last-exam]] 13.9481%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.8182%×0.5 |
| 에이전트 | 61.1 | +0.74 | 실측 | [[tau2-bench]] 87.1345%×1.0, [[terminal-bench]] 31.8182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.0 | +0.13 | 실측 | [[mmmu-pro]] 70%×1.0 |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 64%×1.0 |
| 지시 따르기 | 49.0 | -0.06 | 실측 | [[ifbench]] 46.9388%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
