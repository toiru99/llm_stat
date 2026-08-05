---
type: Model
title: Grok 4.5 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 1.21
output_speed_tps: 61.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.5, z: 2.13, r: 82.0, estimated: false }  # 전문 지식
  reasoning: { s: 73.6, z: 1.96, r: 79.5, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.79, r: 76.8, estimated: false }  # 코딩
  agentic: { s: 86.0, z: 1.93, r: 78.9, estimated: false }  # 에이전트
  trust: { s: 51.7, z: 1.09, r: 66.3, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 77.1, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Grok 4.5 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.21/1M · 61.0 t/s · TTFT 9.68s · 500k ctx` · 가성비 44.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.0 | +2.13 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 79.5 | +1.96 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 76.8 | +1.79 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 78.9 | +1.93 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 66.3 | +1.09 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
