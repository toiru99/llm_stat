---
type: Model
title: Nemotron 3.5 Lightning
creator: NVIDIA
license: Open
intelligence_index: 5.5346663903388
price_blended_usd_1m: 0.06
output_speed_tps: 278.5034397514705
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.2, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.31, r: 45.3, estimated: false }  # 추론
  coding: { s: 41.3, z: 0.04, r: 50.7, estimated: false }  # 코딩
  agentic: { s: 31.6, z: -0.46, r: 43.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.43, r: 56.4, estimated: false }  # 긴문맥
  instruction: { s: 61.5, z: 0.32, r: 54.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Lightning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Nemotron 3.5 Lightning

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **5.5346663903388**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.2 · 혼합 $0.06/1M · 278.5034397514705 t/s · TTFT 0.7355594461792724s · 1M ctx` · 가성비 92.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 74.3434343434343%×0.4, [[humanitys-last-exam]] 10.5653382761817%×0.3 |
| 추론 | 45.3 | -0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.3434343434343%×1.0, [[humanitys-last-exam]] 10.5653382761817%×1.0 |
| 코딩 | 50.7 | +0.04 | 실측 | [[scicode]] 32.060185185185205%×1.0 |
| 에이전트 | 43.1 | -0.46 | 실측 | [[gdpval]] 645.26%×1.0, [[tau3-banking]] 8.8659793814433%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.4 | +0.43 | 실측 | [[aa-lcr]] 60.33333333333331%×1.0 |
| 지시 따르기 | 54.8 | +0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
