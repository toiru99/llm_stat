---
type: Model
title: Gemini 3.8 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.5775
output_speed_tps: 117.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.4, z: 1.98, r: 79.7, estimated: false }  # 전문 지식
  reasoning: { s: 77.8, z: 1.87, r: 78.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.59, r: 73.8, estimated: false }  # 코딩
  agentic: { s: 84.0, z: 1.71, r: 75.7, estimated: false }  # 에이전트
  trust: { s: 44.3, z: 0.81, r: 62.2, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.29, r: 69.4, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 0.95, r: 64.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Gemini 3.8 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 117.0 t/s · TTFT 27.18s · 1M ctx` · 가성비 71.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.7 | +1.98 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 78.0 | +1.87 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 73.8 | +1.59 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 75.7 | +1.71 | 실측 | [[gdpval]] 47.0%×1.0, [[itbench]] 53.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 62.2 | +0.81 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | 69.4 | +1.29 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 64.3 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
