---
type: Model
title: Gemini 3.8 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 0.5775
output_speed_tps: 313.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.91, r: 78.6, estimated: false }  # 전문 지식
  reasoning: { s: 57.0, z: 1.1, r: 66.5, estimated: false }  # 추론
  coding: { s: 87.1, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 64.8, z: 1.06, r: 65.9, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.44, r: 56.6, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.39, r: 70.8, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.37, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 85.3, z: 1.35, r: 70.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3.8 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 313.0 t/s · TTFT 0.7s · 1M ctx` · 가성비 90.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.6 | +1.91 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 66.5 | +1.1 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 65.9 | +1.06 | 실측 | [[gdpval]] 45.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 56.6 | +0.44 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 70.8 | +1.39 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 70.5 | +1.37 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
