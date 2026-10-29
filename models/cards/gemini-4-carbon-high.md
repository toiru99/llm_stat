---
type: Model
title: Gemini 4 Carbon (high)
creator: Google
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 2.94
output_speed_tps: 100.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 98.3, z: 2.15, r: 82.2, estimated: false }  # 전문 지식
  reasoning: { s: 92.9, z: 2.13, r: 81.9, estimated: false }  # 추론
  coding: { s: 95.0, z: 1.94, r: 79.0, estimated: false }  # 코딩
  agentic: { s: 92.9, z: 2.01, r: 80.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 80.2, z: 1.15, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Carbon (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemini 4 Carbon (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 100.0 t/s · TTFT 97.48s · 1M ctx` · 가성비 20.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.2 | +2.15 | 실측 | [[humanitys-last-exam]] 60.0%×0.3 |
| 추론 | 81.9 | +2.13 | 실측 | [[critpt]] 63.0%×1.0, [[humanitys-last-exam]] 60.0%×1.0 |
| 코딩 | 79.0 | +1.94 | 실측 | [[scicode]] 64.0%×1.0 |
| 에이전트 | 80.2 | +2.01 | 실측 | [[gdpval]] 1733.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
