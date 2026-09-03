---
type: Model
title: Gemini 3.8 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 0.5775
output_speed_tps: 312.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.3, z: 2.05, r: 80.8, estimated: false }  # 전문 지식
  reasoning: { s: 69.0, z: 1.69, r: 75.4, estimated: false }  # 추론
  coding: { s: 87.1, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 81.0, z: 1.69, r: 75.3, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 1.08, r: 66.1, estimated: false }  # 신뢰성
  multimodal: { s: 97.2, z: 1.32, r: 69.8, estimated: false }  # 멀티모달
  long_context: { s: 98.8, z: 1.48, r: 72.2, estimated: false }  # 긴문맥
  instruction: { s: 80.2, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3.8 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 312.0 t/s · TTFT 6.44s · 1M ctx` · 가성비 98.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.8 | +2.05 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 75.4 | +1.69 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 75.3 | +1.69 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | 66.1 | +1.08 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 69.8 | +1.32 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 72.2 | +1.48 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
