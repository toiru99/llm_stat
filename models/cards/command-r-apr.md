---
type: Model
title: Command-R+ (Apr)
creator: Cohere
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 104
is_reasoning: false
radar:
  knowledge: { s: 17.6, z: -1.12, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.2, z: -0.91, r: 36.4, estimated: false }  # 추론
  coding: { s: 0.4, z: -1.11, r: 33.4, estimated: true }  # 코딩
  agentic: { s: 2.8, z: -1.33, r: 30.1, estimated: true }  # 에이전트
  trust: { s: 25.6, z: 0.05, r: 50.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.7, z: -1.4, r: 29.0, estimated: true }  # 긴문맥
  instruction: { s: 29.2, z: -0.98, r: 35.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R+ (Apr)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Command-R+ (Apr)

Cohere · Open · Medium(104B) · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.12 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.4 | -0.91 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.4 | -1.11 | 추정 | (추정) |
| 에이전트 | 30.1 | -1.33 | 추정 | (추정) |
| 신뢰성 | 50.8 | +0.05 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.0 | -1.4 | 추정 | (추정) |
| 지시 따르기 | 35.3 | -0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
