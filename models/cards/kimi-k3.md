---
type: Model
title: Kimi K3
creator: Kimi
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: None
output_speed_tps: 32.0
context_window: 1050000
status: current
size_class: Large
params_b: 2800
is_reasoning: true
radar:
  knowledge: { s: 82.2, z: 1.93, r: 79.0, estimated: false }  # 전문 지식
  reasoning: { s: 84.9, z: 2.54, r: 88.1, estimated: false }  # 추론
  coding: { s: 98.3, z: 2.15, r: 82.3, estimated: false }  # 코딩
  agentic: { s: 89.8, z: 2.07, r: 81.0, estimated: false }  # 에이전트
  trust: { s: 55.2, z: 1.27, r: 69.1, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.1, r: 66.4, estimated: false }  # 멀티모달
  long_context: { s: 98.7, z: 1.46, r: 71.9, estimated: false }  # 긴문맥
  instruction: { s: 78.0, z: 1.03, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Kimi K3

Kimi · Proprietary · Large(2800B) · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $None/1M · 32.0 t/s · TTFT 161.17s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.0 | +1.93 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 88.1 | +2.54 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 82.3 | +2.15 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 81.0 | +2.07 | 실측 | [[apex-agents]] 41.0%×1.0, [[gdpval]] 59.0%×1.0, [[itbench]] 48.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 69.1 | +1.27 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 66.4 | +1.1 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 71.9 | +1.46 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
