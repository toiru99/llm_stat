---
type: Model
title: Jamba 1.6 Mini
creator: AI21 Labs
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Medium
params_b: 52
is_reasoning: false
radar:
  knowledge: { s: 15.8, z: -1.21, r: 31.8, estimated: false }  # 전문 지식
  reasoning: { s: 14.5, z: -1.03, r: 34.6, estimated: false }  # 추론
  coding: { s: 16.7, z: -1.3, r: 30.5, estimated: false }  # 코딩
  agentic: { s: 9.6, z: -1.07, r: 33.9, estimated: true }  # 에이전트
  trust: { s: 25.8, z: -0.1, r: 48.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.7, z: -1.08, r: 33.7, estimated: true }  # 긴문맥
  instruction: { s: 24.0, z: -1.24, r: 31.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Jamba 1.6 Mini

AI21 Labs · Open · Medium(52B) · 컨텍스트 256k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.8 | -1.21 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.6 | -1.03 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 30.5 | -1.3 | 실측 | [[scicode]] 10.0%×1.0 |
| 에이전트 | 33.9 | -1.07 | 추정 | (추정) |
| 신뢰성 | 48.5 | -0.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.7 | -1.08 | 추정 | (추정) |
| 지시 따르기 | 31.4 | -1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
