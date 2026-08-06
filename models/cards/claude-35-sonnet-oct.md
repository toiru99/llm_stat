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
  knowledge: { s: 36.5, z: -0.23, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.6, z: -0.1, r: 48.5, estimated: false }  # 추론
  coding: { s: 61.7, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 40.3, z: 0.18, r: 52.7, estimated: true }  # 에이전트
  trust: { s: 58.4, z: 1.36, r: 70.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.3, z: 0.01, r: 50.2, estimated: true }  # 긴문맥
  instruction: { s: 60.3, z: 0.29, r: 54.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Sonnet (Oct)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Claude 3.5 Sonnet (Oct)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.23 | 실측 | [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 48.5 | -0.1 | 실측 | [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[scicode]] 37.0%×1.0 |
| 에이전트 | 52.7 | +0.18 | 추정 | (추정) |
| 신뢰성 | 70.4 | +1.36 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.2 | +0.01 | 추정 | (추정) |
| 지시 따르기 | 54.3 | +0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
