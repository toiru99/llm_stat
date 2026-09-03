---
type: Model
title: Agnes 2.5 Pro Beta
creator: Sapiens AI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 0.057
output_speed_tps: 155.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.6, z: 0.39, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 69.7, z: 1.73, r: 75.9, estimated: false }  # 추론
  coding: { s: 77.4, z: 1.28, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 69.9, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 2.0, r: 80.0, estimated: false }  # 신뢰성
  multimodal: { s: 84.5, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.55, r: 73.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Agnes 2.5 Pro Beta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.057/1M · 155.0 t/s · TTFT 2.18s · 1M ctx` · 가성비 859.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.39 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 75.9 | +1.73 | 실측 | [[critpt]] 16.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 69.1 | +1.28 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 36.0%×1.0 |
| 신뢰성 | 80.0 | +2.0 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 73.3 | +1.55 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
