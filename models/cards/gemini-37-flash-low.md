---
type: Model
title: Gemini 3.7 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.5775
output_speed_tps: 276.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.6, z: 1.87, r: 78.0, estimated: false }  # 전문 지식
  reasoning: { s: 56.8, z: 1.05, r: 65.7, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.88, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 62.0, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.31, r: 54.6, estimated: false }  # 신뢰성
  multimodal: { s: 97.2, z: 1.34, r: 70.1, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 75.6, z: 0.96, r: 64.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Gemini 3.7 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 276.0 t/s · TTFT 0.91s · 1M ctx` · 가성비 71.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.0 | +1.87 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 65.7 | +1.05 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 78.3 | +1.88 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[gdpval]] 43.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 54.6 | +0.31 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 70.1 | +1.34 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
