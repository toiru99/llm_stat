---
type: Model
title: Gemma 3n E4B (May)
creator: Google
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: 8.39
is_reasoning: false
radar:
  knowledge: { s: 15.5, z: -1.22, r: 31.7, estimated: false }  # 전문 지식
  reasoning: { s: 14.6, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 15.0, z: -1.34, r: 29.9, estimated: false }  # 코딩
  agentic: { s: 7.4, z: -1.14, r: 33.0, estimated: true }  # 에이전트
  trust: { s: 18.5, z: -0.47, r: 43.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.1, z: -1.27, r: 31.0, estimated: true }  # 긴문맥
  instruction: { s: 28.1, z: -1.04, r: 34.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E4B (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Gemma 3n E4B (May)

Google · Open · Small(8.39B) · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.7 | -1.22 | 실측 | [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 29.9 | -1.34 | 실측 | [[scicode]] 9.0%×1.0 |
| 에이전트 | 33.0 | -1.14 | 추정 | (추정) |
| 신뢰성 | 43.0 | -0.47 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.0 | -1.27 | 추정 | (추정) |
| 지시 따르기 | 34.4 | -1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
