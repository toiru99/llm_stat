---
type: Model
title: Claude 3.5 Sonnet (June)
creator: Anthropic
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.8, z: -0.32, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.16, r: 47.5, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 36.0, z: 0.0, r: 50.0, estimated: true }  # 에이전트
  trust: { s: 38.8, z: 0.53, r: 57.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.0, z: -0.39, r: 44.1, estimated: true }  # 긴문맥
  instruction: { s: 41.7, z: -0.43, r: 43.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Sonnet (June)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude 3.5 Sonnet (June)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 3.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.32 | 실측 | [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 47.5 | -0.16 | 실측 | [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 50.0 | +0.0 | 추정 | (추정) |
| 신뢰성 | 57.9 | +0.53 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.1 | -0.39 | 추정 | (추정) |
| 지시 따르기 | 43.5 | -0.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
