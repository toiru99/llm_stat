---
type: Model
title: Gemma 3n E4B (May)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.1, z: -1.59, r: 26.2, estimated: false }  # 전문 지식
  reasoning: { s: 12.9, z: -1.48, r: 27.8, estimated: false }  # 추론
  coding: { s: 0.1, z: -1.26, r: 31.1, estimated: true }  # 코딩
  agentic: { s: 0.0, z: -1.18, r: 32.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.3, z: -1.52, r: 27.2, estimated: true }  # 긴문맥
  instruction: { s: 21.1, z: -1.36, r: 29.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3n E4B (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Gemma 3n E4B (May)

Google · Open · Small · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.2 | -1.59 | 실측 | [[gpqa-diamond]] 27.8%×0.4, [[humanitys-last-exam]] 4.8%×0.3 |
| 추론 | 27.8 | -1.48 | 실측 | [[gpqa-diamond]] 27.8%×1.0, [[humanitys-last-exam]] 4.8%×1.0 |
| 코딩 | 31.1 | -1.26 | 추정 | (추정) |
| 에이전트 | 32.3 | -1.18 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.2 | -1.52 | 추정 | (추정) |
| 지시 따르기 | 29.5 | -1.36 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
