---
type: Model
title: Gemini 3.8 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 0.5775
output_speed_tps: 265.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.0, z: 1.84, r: 77.6, estimated: false }  # 전문 지식
  reasoning: { s: 56.6, z: 1.04, r: 65.6, estimated: false }  # 추론
  coding: { s: 83.7, z: 1.8, r: 77.0, estimated: false }  # 코딩
  agentic: { s: 65.9, z: 1.09, r: 66.3, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.45, r: 56.7, estimated: false }  # 신뢰성
  multimodal: { s: 97.2, z: 1.34, r: 70.1, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.29, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 78.8, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 3.8 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 265.0 t/s · TTFT 0.78s · 1M ctx` · 가성비 72.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.6 | +1.84 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 65.6 | +1.04 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 77.0 | +1.8 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 66.3 | +1.09 | 실측 | [[gdpval]] 43.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 56.7 | +0.45 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 70.1 | +1.34 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 69.3 | +1.29 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
