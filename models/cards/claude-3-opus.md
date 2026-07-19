---
type: Model
title: Claude 3 Opus
creator: Anthropic
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.2, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.1, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.34, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 29.1, z: -0.28, r: 45.8, estimated: true }  # 에이전트
  trust: { s: 23.0, z: -0.22, r: 46.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.6, z: -0.45, r: 43.3, estimated: true }  # 긴문맥
  instruction: { s: 45.5, z: -0.29, r: 45.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Claude 3 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 1.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 45.0 | -0.34 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 45.8 | -0.28 | 추정 | (추정) |
| 신뢰성 | 46.7 | -0.22 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.3 | -0.45 | 추정 | (추정) |
| 지시 따르기 | 45.7 | -0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
