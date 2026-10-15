---
type: Model
title: Agnes 2.5 Pro Beta
creator: Sapiens AI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 0.057
output_speed_tps: 119.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.0, z: 0.24, r: 53.6, estimated: false }  # 전문 지식
  reasoning: { s: 68.1, z: 1.43, r: 71.5, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.12, r: 66.8, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 0.99, r: 64.9, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 1.84, r: 77.6, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.54, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 86.5, z: 1.33, r: 70.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-15
timestamp: 2026-10-15T00:00:00Z
---

# Agnes 2.5 Pro Beta

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.057/1M · 119.0 t/s · TTFT 1.41s · 1M ctx` · 가성비 614.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.6 | +0.24 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 71.5 | +1.43 | 실측 | [[critpt]] 16.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 66.8 | +1.12 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 64.9 | +0.99 | 실측 | [[gdpval]] 41.0%×1.0, [[tau3-banking]] 36.0%×1.0 |
| 신뢰성 | 77.6 | +1.84 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | 58.0 | +0.54 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 70.0 | +1.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
