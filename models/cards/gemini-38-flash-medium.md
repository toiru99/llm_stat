---
type: Model
title: Gemini 3.8 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 0.5775
output_speed_tps: 246.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.0, z: 1.98, r: 79.7, estimated: false }  # 전문 지식
  reasoning: { s: 68.6, z: 1.62, r: 74.2, estimated: false }  # 추론
  coding: { s: 83.7, z: 1.8, r: 77.0, estimated: false }  # 코딩
  agentic: { s: 82.3, z: 1.72, r: 75.8, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 1.08, r: 66.2, estimated: false }  # 신뢰성
  multimodal: { s: 95.8, z: 1.27, r: 69.1, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.39, r: 70.9, estimated: false }  # 긴문맥
  instruction: { s: 77.1, z: 1.02, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 3.8 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 246.0 t/s · TTFT 8.29s · 1M ctx` · 가성비 81.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.7 | +1.98 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 74.2 | +1.62 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 77.0 | +1.8 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 75.8 | +1.72 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | 66.2 | +1.08 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 69.1 | +1.27 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 70.9 | +1.39 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 65.2 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
