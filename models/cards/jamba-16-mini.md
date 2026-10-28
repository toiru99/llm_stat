---
type: Model
title: Jamba 1.6 Mini
creator: AI21 Labs
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.4, z: -1.5, r: 27.5, estimated: false }  # 전문 지식
  reasoning: { s: 14.1, z: -1.43, r: 28.6, estimated: false }  # 추론
  coding: { s: 1.2, z: -1.2, r: 32.0, estimated: true }  # 코딩
  agentic: { s: 2.1, z: -1.1, r: 33.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.1, z: -1.44, r: 28.3, estimated: true }  # 긴문맥
  instruction: { s: 21.1, z: -1.32, r: 30.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Jamba 1.6 Mini

AI21 Labs · Open · Medium · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.5 | -1.5 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 28.6 | -1.43 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.0 | -1.2 | 추정 | (추정) |
| 에이전트 | 33.5 | -1.1 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.3 | -1.44 | 추정 | (추정) |
| 지시 따르기 | 30.1 | -1.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
