---
type: Model
title: Claude 3.5 Sonnet (Oct)
creator: Anthropic
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.4, z: -0.26, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.16, r: 47.5, estimated: false }  # 추론
  coding: { s: 26.1, z: -0.21, r: 46.9, estimated: true }  # 코딩
  agentic: { s: 48.7, z: 0.43, r: 56.4, estimated: true }  # 에이전트
  trust: { s: 21.9, z: -0.12, r: 48.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.3, z: -0.15, r: 47.8, estimated: true }  # 긴문맥
  instruction: { s: 49.0, z: -0.15, r: 47.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Sonnet (Oct)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude 3.5 Sonnet (Oct)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 1.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.26 | 실측 | [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 47.5 | -0.16 | 실측 | [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 46.9 | -0.21 | 추정 | (추정) |
| 에이전트 | 56.4 | +0.43 | 추정 | (추정) |
| 신뢰성 | 48.2 | -0.12 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.8 | -0.15 | 추정 | (추정) |
| 지시 따르기 | 47.8 | -0.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
