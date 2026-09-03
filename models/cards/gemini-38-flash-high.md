---
type: Model
title: Gemini 3.8 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 0.5775
output_speed_tps: 302.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.1, z: 2.24, r: 83.6, estimated: false }  # 전문 지식
  reasoning: { s: 79.1, z: 2.19, r: 82.9, estimated: false }  # 추론
  coding: { s: 87.1, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 81.5, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: 44.3, z: 0.93, r: 64.0, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.46, r: 71.8, estimated: false }  # 멀티모달
  long_context: { s: 97.6, z: 1.44, r: 71.6, estimated: false }  # 긴문맥
  instruction: { s: 79.6, z: 1.11, r: 66.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3.8 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 302.0 t/s · TTFT 13.3s · 1M ctx` · 가성비 102.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.6 | +2.24 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 82.9 | +2.19 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 64.0 | +0.93 | 실측 | [[aa-omniscience]] 45.0%×1.0 |
| 멀티모달 | 71.8 | +1.46 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 71.6 | +1.44 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
