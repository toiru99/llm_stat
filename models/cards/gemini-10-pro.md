---
type: Model
title: Gemini 1.0 Pro
creator: Google
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.6, z: -1.26, r: 31.1, estimated: false }  # 전문 지식
  reasoning: { s: 13.5, z: -1.06, r: 34.1, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.14, r: 32.9, estimated: false }  # 코딩
  agentic: { s: 10.6, z: -1.01, r: 34.9, estimated: true }  # 에이전트
  trust: { s: 31.8, z: 0.26, r: 53.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.2, z: -1.19, r: 32.1, estimated: true }  # 긴문맥
  instruction: { s: 32.6, z: -0.87, r: 37.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.0 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Gemini 1.0 Pro

Google · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.1 | -1.26 | 실측 | [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.1 | -1.06 | 실측 | [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.9 | -1.14 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 34.9 | -1.01 | 추정 | (추정) |
| 신뢰성 | 53.8 | +0.26 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.1 | -1.19 | 추정 | (추정) |
| 지시 따르기 | 37.0 | -0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
