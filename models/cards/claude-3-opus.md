---
type: Model
title: Claude 3 Opus
creator: Anthropic
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.4, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 24.4, z: -0.51, r: 42.3, estimated: false }  # 추론
  coding: { s: 13.1, z: -0.66, r: 40.1, estimated: true }  # 코딩
  agentic: { s: 28.1, z: -0.36, r: 44.6, estimated: true }  # 에이전트
  trust: { s: 25.1, z: 0.03, r: 50.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.3, z: -0.33, r: 45.0, estimated: true }  # 긴문맥
  instruction: { s: 38.5, z: -0.59, r: 41.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude 3 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 0.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 42.3 | -0.51 | 실측 | [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 40.1 | -0.66 | 추정 | (추정) |
| 에이전트 | 44.6 | -0.36 | 추정 | (추정) |
| 신뢰성 | 50.5 | +0.03 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.0 | -0.33 | 추정 | (추정) |
| 지시 따르기 | 41.1 | -0.59 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
