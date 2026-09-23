---
type: Model
title: Claude Opus 5.5 (max with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 98.9, z: 2.7, r: 90.5, estimated: false }  # 전문 지식
  reasoning: { s: 100.0, z: 3.01, r: 95.2, estimated: false }  # 추론
  coding: { s: 100.0, z: 2.25, r: 83.7, estimated: false }  # 코딩
  agentic: { s: 100.0, z: 2.38, r: 85.8, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.67, r: 60.1, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.48, r: 72.3, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.36, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 78.1, z: 1.02, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (max with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Claude Opus 5.5 (max with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 19.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 90.5 | +2.7 | 실측 | [[aa-omniscience]] 66.0%×1.0, [[humanitys-last-exam]] 61.0%×0.3 |
| 추론 | 95.2 | +3.01 | 실측 | [[critpt]] 32.0%×1.0, [[humanitys-last-exam]] 61.0%×1.0 |
| 코딩 | 83.7 | +2.25 | 실측 | [[scicode]] 67.0%×1.0 |
| 에이전트 | 85.8 | +2.38 | 실측 | [[gdpval]] 67.0%×1.0 |
| 신뢰성 | 60.1 | +0.67 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 72.3 | +1.48 | 실측 | [[mmmu-pro]] 88.0%×1.0 |
| 긴문맥 | 70.5 | +1.36 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 65.2 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
