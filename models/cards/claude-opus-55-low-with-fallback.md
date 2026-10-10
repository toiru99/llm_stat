---
type: Model
title: Claude Opus 5.5 (low with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 2.94
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.6, z: 2.27, r: 84.0, estimated: false }  # 전문 지식
  reasoning: { s: 67.3, z: 1.39, r: 70.9, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.7, r: 75.5, estimated: false }  # 코딩
  agentic: { s: 54.4, z: 0.59, r: 58.8, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.19, r: 52.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.22, r: 68.3, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 84.6, z: 1.26, r: 68.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (low with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Claude Opus 5.5 (low with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 71.0 t/s · TTFT 8.65s · 1M ctx` · 가성비 14.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.0 | +2.27 | 실측 | [[aa-omniscience]] 64.0%×1.0, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 70.9 | +1.39 | 실측 | [[critpt]] 18.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 75.5 | +1.7 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 58.8 | +0.59 | 실측 | [[gdpval]] 37.0%×1.0 |
| 신뢰성 | 52.9 | +0.19 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 68.3 | +1.22 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 68.9 | +1.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
