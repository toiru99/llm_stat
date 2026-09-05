---
type: Model
title: Agnes 2.5 Pro Beta
creator: Sapiens AI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.057
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.3, z: 0.36, r: 55.4, estimated: false }  # 전문 지식
  reasoning: { s: 69.3, z: 1.65, r: 74.7, estimated: false }  # 추론
  coding: { s: 71.4, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 69.5, z: 1.23, r: 68.4, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 2.01, r: 80.2, estimated: false }  # 신뢰성
  multimodal: { s: 83.3, z: 0.65, r: 59.8, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.36, r: 70.4, estimated: false }  # 긴문맥
  instruction: { s: 92.3, z: 1.66, r: 74.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Agnes 2.5 Pro Beta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.057/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 701.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.4 | +0.36 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 74.7 | +1.65 | 실측 | [[critpt]] 16.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 68.4 | +1.23 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 36.0%×1.0 |
| 신뢰성 | 80.2 | +2.01 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | 59.8 | +0.65 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 70.4 | +1.36 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 74.9 | +1.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
