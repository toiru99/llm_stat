---
type: Model
title: Qwen3 32B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.195
output_speed_tps: 115.04124930581625
context_window: 32768
status: past
size_class: Small
params_b: 32.8
is_reasoning: false
radar:
  knowledge: { s: 30.7, z: -0.78, r: 38.3, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 27.2, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 32B (non-reasoning)

Alibaba · Open · Small(32.8B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 115.04124930581625 t/s · TTFT 0.9201089338866385s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 38.3 | -0.78 | 실측 | [[gpqa-diamond]] 53.5354%×0.4, [[humanitys-last-exam]] 4.13%×0.3 |
| 추론 | 44.2 | -0.39 | 실측 | [[gpqa-diamond]] 53.5354%×1.0, [[humanitys-last-exam]] 4.13%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 31.4966%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
