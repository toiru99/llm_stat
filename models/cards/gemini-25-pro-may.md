---
type: Model
title: Gemini 2.5 Pro (May)
creator: Google
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 1.3375
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.4, z: 1.07, r: 66.1, estimated: false }  # 전문 지식
  reasoning: { s: 58.7, z: 1.18, r: 67.8, estimated: false }  # 추론
  coding: { s: 67.7, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 53.2, z: 0.61, r: 59.2, estimated: true }  # 에이전트
  trust: { s: 36.5, z: 0.56, r: 58.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.8, z: 1.14, r: 67.2, estimated: true }  # 긴문맥
  instruction: { s: 81.3, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 2.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 17.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.07 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 67.8 | +1.18 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 59.2 | +0.61 | 추정 | (추정) |
| 신뢰성 | 58.4 | +0.56 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.2 | +1.14 | 추정 | (추정) |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
