---
type: Model
title: Gemini 3.5 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.331
output_speed_tps: 455.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.0, z: 0.55, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.5, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.65, r: 59.8, estimated: false }  # 코딩
  agentic: { s: 44.3, z: 0.35, r: 55.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.78, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 80.1, z: 1.15, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemini 3.5 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 455.0 t/s · TTFT 6.47s · 1M ctx` · 가성비 36.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.55 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 59.8 | +0.65 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 55.2 | +0.35 | 실측 | [[gdpval]] 995.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.6 | +0.78 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
