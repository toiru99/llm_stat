---
type: Model
title: Command-R+ (Apr)
creator: Cohere
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 104
is_reasoning: false
radar:
  knowledge: { s: 18.3, z: -1.09, r: 33.7, estimated: false }  # 전문 지식
  reasoning: { s: 16.9, z: -0.89, r: 36.7, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.13, r: 33.0, estimated: false }  # 코딩
  agentic: { s: 11.1, z: -0.99, r: 35.2, estimated: true }  # 에이전트
  trust: { s: 27.7, z: -0.05, r: 49.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.9, z: -1.33, r: 30.0, estimated: true }  # 긴문맥
  instruction: { s: 27.1, z: -1.08, r: 33.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R+ (Apr)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Command-R+ (Apr)

Cohere · Open · Medium(104B) · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 0.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.7 | -1.09 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.7 | -0.89 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.0 | -1.13 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 35.2 | -0.99 | 추정 | (추정) |
| 신뢰성 | 49.3 | -0.05 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.0 | -1.33 | 추정 | (추정) |
| 지시 따르기 | 33.8 | -1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
