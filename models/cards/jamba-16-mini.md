---
type: Model
title: Jamba 1.6 Mini
creator: AI21 Labs
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.4, z: -1.24, r: 31.4, estimated: false }  # 전문 지식
  reasoning: { s: 14.1, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 3.3, z: -1.1, r: 33.5, estimated: true }  # 코딩
  agentic: { s: 12.3, z: -0.98, r: 35.3, estimated: true }  # 에이전트
  trust: { s: 18.9, z: -0.32, r: 45.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.4, z: -1.11, r: 33.4, estimated: true }  # 긴문맥
  instruction: { s: 28.7, z: -1.03, r: 34.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Jamba 1.6 Mini

AI21 Labs · Open · Medium · 컨텍스트 256k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.4 | -1.24 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.5 | -1.1 | 추정 | (추정) |
| 에이전트 | 35.3 | -0.98 | 추정 | (추정) |
| 신뢰성 | 45.2 | -0.32 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.4 | -1.11 | 추정 | (추정) |
| 지시 따르기 | 34.5 | -1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
