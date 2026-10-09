---
type: Model
title: Command-R+ (Apr)
creator: Cohere
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.5, z: -1.17, r: 32.5, estimated: false }  # 전문 지식
  reasoning: { s: 16.1, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 0.9, z: -1.23, r: 31.6, estimated: true }  # 코딩
  agentic: { s: 1.8, z: -1.42, r: 28.7, estimated: true }  # 에이전트
  trust: { s: 23.9, z: -0.13, r: 48.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 8.2, z: -1.32, r: 30.2, estimated: true }  # 긴문맥
  instruction: { s: 29.1, z: -1.06, r: 34.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R+ (Apr)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Command-R+ (Apr)

Cohere · Open · Medium · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.5 | -1.17 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.6 | -1.23 | 추정 | (추정) |
| 에이전트 | 28.7 | -1.42 | 추정 | (추정) |
| 신뢰성 | 48.0 | -0.13 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.2 | -1.32 | 추정 | (추정) |
| 지시 따르기 | 34.1 | -1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
