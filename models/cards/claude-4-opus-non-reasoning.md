---
type: Model
title: Claude 4 Opus (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.4, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 39.1, z: 0.11, r: 51.6, estimated: false }  # 추론
  coding: { s: 29.4, z: -0.25, r: 46.2, estimated: true }  # 코딩
  agentic: { s: 47.3, z: 0.31, r: 54.7, estimated: true }  # 에이전트
  trust: { s: 29.6, z: 0.13, r: 52.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.4, z: 0.31, r: 54.7, estimated: true }  # 긴문맥
  instruction: { s: 43.7, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Opus (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Claude 4 Opus (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 1.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 51.6 | +0.11 | 실측 | [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 46.2 | -0.25 | 추정 | (추정) |
| 에이전트 | 54.7 | +0.31 | 추정 | (추정) |
| 신뢰성 | 52.0 | +0.13 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.7 | +0.31 | 추정 | (추정) |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
