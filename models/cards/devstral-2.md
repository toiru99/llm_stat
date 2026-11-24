---
type: Model
title: Devstral 2
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Medium
params_b: 125
is_reasoning: false
radar:
  knowledge: { s: 34.2, z: -0.61, r: 40.9, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 29.0, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.5, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 36.5, z: -0.58, r: 41.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Devstral 2

Mistral · Open · Medium(125B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.9 | -0.61 | 실측 | [[gpqa-diamond]] 59.3939%×0.4, [[humanitys-last-exam]] 3.56812%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 59.3939%×1.0, [[humanitys-last-exam]] 3.56812%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[scicode]] 32.7546%×1.0, [[terminal-bench]] 18.9394%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[gdpval]] 551.5 Elo×1.0, [[tau2-bench]] 24.8538%×1.0, [[tau3-banking]] 10.5155%×1.0, [[terminal-bench]] 18.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 32.3333%×1.0 |
| 지시 따르기 | 41.3 | -0.58 | 실측 | [[ifbench]] 38.0952%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
