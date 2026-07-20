---
type: Model
title: Claude 3.5 Sonnet (Oct)
creator: Anthropic
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.5, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.6, z: -0.05, r: 49.2, estimated: false }  # 추론
  coding: { s: 61.7, z: 0.65, r: 59.7, estimated: false }  # 코딩
  agentic: { s: 41.4, z: 0.2, r: 53.0, estimated: true }  # 에이전트
  trust: { s: 41.6, z: 0.66, r: 59.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.4, z: -0.01, r: 49.8, estimated: true }  # 긴문맥
  instruction: { s: 47.8, z: -0.2, r: 47.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Sonnet (Oct)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Claude 3.5 Sonnet (Oct)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 49.2 | -0.05 | 실측 | [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 59.7 | +0.65 | 실측 | [[scicode]] 37.0%×1.0 |
| 에이전트 | 53.0 | +0.2 | 추정 | (추정) |
| 신뢰성 | 59.9 | +0.66 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.8 | -0.01 | 추정 | (추정) |
| 지시 따르기 | 47.1 | -0.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
