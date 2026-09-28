---
type: Model
title: Jamba 1.6 Large
creator: AI21 Labs
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.4, z: -0.96, r: 35.6, estimated: false }  # 전문 지식
  reasoning: { s: 19.4, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 8.8, z: -0.91, r: 36.4, estimated: true }  # 코딩
  agentic: { s: 13.8, z: -0.92, r: 36.2, estimated: true }  # 에이전트
  trust: { s: 32.0, z: 0.29, r: 54.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.0, z: -1.12, r: 33.2, estimated: true }  # 긴문맥
  instruction: { s: 24.6, z: -1.2, r: 32.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.6 Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Jamba 1.6 Large

AI21 Labs · Open · Large · 컨텍스트 256k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.6 | -0.96 | 실측 | [[gpqa-diamond]] 39.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[gpqa-diamond]] 39.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.4 | -0.91 | 추정 | (추정) |
| 에이전트 | 36.2 | -0.92 | 추정 | (추정) |
| 신뢰성 | 54.4 | +0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.2 | -1.12 | 추정 | (추정) |
| 지시 따르기 | 32.1 | -1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
