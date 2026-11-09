---
type: Model
title: Nemotron 3.5 Lightning
creator: NVIDIA
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.0565
output_speed_tps: None
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.4, z: 0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 42.0, z: 0.15, r: 52.3, estimated: false }  # 코딩
  agentic: { s: 25.8, z: -0.29, r: 45.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.46, r: 56.9, estimated: false }  # 긴문맥
  instruction: { s: 62.6, z: 0.41, r: 56.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Lightning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Nemotron 3.5 Lightning

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.06 · 출력 $0.2 · 혼합 $0.0565/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 106.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +0.0 | 실측 | [[gpqa-diamond]] 74.3%×0.4, [[humanitys-last-exam]] 10.6%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 1.5%×1.0, [[gpqa-diamond]] 74.3%×1.0, [[humanitys-last-exam]] 10.6%×1.0 |
| 코딩 | 52.3 | +0.15 | 실측 | [[scicode]] 32.1%×1.0 |
| 에이전트 | 45.6 | -0.29 | 실측 | [[gdpval]] 646.0%×1.0, [[tau3-banking]] 8.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.9 | +0.46 | 실측 | [[aa-lcr]] 60.3%×1.0 |
| 지시 따르기 | 56.2 | +0.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
