---
type: Model
title: Jamba 1.6 Large
creator: AI21 Labs
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 398
is_reasoning: false
radar:
  knowledge: { s: 21.5, z: -0.94, r: 36.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.4, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 8.5, z: -0.83, r: 37.6, estimated: true }  # 코딩
  agentic: { s: 14.8, z: -0.87, r: 37.0, estimated: true }  # 에이전트
  trust: { s: 24.5, z: -0.0, r: 50.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.7, z: -1.18, r: 32.3, estimated: true }  # 긴문맥
  instruction: { s: 27.1, z: -1.07, r: 34.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Jamba 1.6 Large

AI21 Labs · Open · Large(398B) · 컨텍스트 256k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.0 | -0.94 | 실측 | [[gpqa-diamond]] 39.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[gpqa-diamond]] 39.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.6 | -0.83 | 추정 | (추정) |
| 에이전트 | 37.0 | -0.87 | 추정 | (추정) |
| 신뢰성 | 50.0 | +-0.0 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.3 | -1.18 | 추정 | (추정) |
| 지시 따르기 | 34.0 | -1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
