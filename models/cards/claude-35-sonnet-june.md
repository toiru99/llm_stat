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
  knowledge: { s: 33.8, z: -0.36, r: 44.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.25, r: 53.7, estimated: false }  # 코딩
  agentic: { s: 34.7, z: -0.04, r: 49.4, estimated: true }  # 에이전트
  trust: { s: 36.1, z: 0.34, r: 55.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.4, z: -0.43, r: 43.6, estimated: true }  # 긴문맥
  instruction: { s: 46.9, z: -0.27, r: 46.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Sonnet (June)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Claude 3.5 Sonnet (June)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 3.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.6 | -0.36 | 실측 | [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 53.7 | +0.25 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 49.4 | -0.04 | 추정 | (추정) |
| 신뢰성 | 55.1 | +0.34 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.6 | -0.43 | 추정 | (추정) |
| 지시 따르기 | 46.0 | -0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
