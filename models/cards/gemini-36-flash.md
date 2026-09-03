---
type: Model
title: Gemini 3.6 Flash
creator: Google
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 0.63
output_speed_tps: 178.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.0, z: 1.89, r: 78.4, estimated: false }  # 전문 지식
  reasoning: { s: 67.0, z: 1.59, r: 73.9, estimated: false }  # 추론
  coding: { s: 85.5, z: 1.61, r: 74.2, estimated: false }  # 코딩
  agentic: { s: 62.7, z: 0.98, r: 64.7, estimated: false }  # 에이전트
  trust: { s: 43.3, z: 0.88, r: 63.2, estimated: false }  # 신뢰성
  multimodal: { s: 95.8, z: 1.25, r: 68.7, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.37, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.08, r: 66.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3.6 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.63/1M · 178.0 t/s · TTFT 16.51s · 1M ctx` · 가성비 82.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.89 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 73.9 | +1.59 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 74.2 | +1.61 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 64.7 | +0.98 | 실측 | [[gdpval]] 46.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 63.2 | +0.88 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | 68.7 | +1.25 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 70.5 | +1.37 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
