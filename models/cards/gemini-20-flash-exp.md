---
type: Model
title: Gemini 2.0 Flash (exp)
creator: Google
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 0.0
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.0, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 36.0, z: 0.14, r: 52.0, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.45, r: 56.8, estimated: false }  # 코딩
  agentic: { s: 49.2, z: 0.51, r: 57.6, estimated: true }  # 에이전트
  trust: { s: 51.4, z: 1.1, r: 66.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.73, r: 60.9, estimated: true }  # 긴문맥
  instruction: { s: 71.6, z: 0.79, r: 61.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash (exp)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Gemini 2.0 Flash (exp)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 52.0 | +0.14 | 실측 | [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 56.8 | +0.45 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 57.6 | +0.51 | 추정 | (추정) |
| 신뢰성 | 66.5 | +1.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.9 | +0.73 | 추정 | (추정) |
| 지시 따르기 | 61.8 | +0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
