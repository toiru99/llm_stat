---
type: Model
title: Claude Opus 5.5 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 2.94
output_speed_tps: 74.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.8, z: 2.46, r: 86.9, estimated: false }  # 전문 지식
  reasoning: { s: 94.3, z: 2.62, r: 89.4, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.78, r: 76.7, estimated: false }  # 코딩
  agentic: { s: 89.6, z: 1.94, r: 79.1, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.21, r: 53.1, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.29, r: 69.4, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 78.2, z: 0.99, r: 64.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Claude Opus 5.5 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 74.0 t/s · TTFT 37.37s · 1M ctx` · 가성비 18.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.9 | +2.46 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[humanitys-last-exam]] 56.0%×0.3 |
| 추론 | 89.4 | +2.62 | 실측 | [[critpt]] 31.0%×1.0, [[humanitys-last-exam]] 56.0%×1.0 |
| 코딩 | 76.7 | +1.78 | 실측 | [[scicode]] 60.0%×1.0 |
| 에이전트 | 79.1 | +1.94 | 실측 | [[gdpval]] 60.0%×1.0 |
| 신뢰성 | 53.1 | +0.21 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 69.4 | +1.29 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 64.9 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
