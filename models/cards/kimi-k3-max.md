---
type: Model
title: Kimi K3 (max)
creator: Kimi
license: Open
intelligence_index: 44.0
price_blended_usd_1m: 2.31
output_speed_tps: 34.0
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.7, z: 1.67, r: 75.1, estimated: false }  # 전문 지식
  reasoning: { s: 82.1, z: 2.07, r: 81.1, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.73, r: 75.9, estimated: false }  # 코딩
  agentic: { s: 85.1, z: 1.77, r: 76.6, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 0.92, r: 63.8, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.95, r: 64.3, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.47, r: 72.0, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 0.9, r: 63.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Kimi K3 (max)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 34.0 t/s · TTFT 4.11s · 1M ctx` · 가성비 19.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.1 | +1.67 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 81.1 | +2.07 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 75.9 | +1.73 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 76.6 | +1.77 | 실측 | [[apex-agents]] 41.0%×1.0, [[gdpval]] 52.0%×1.0, [[itbench]] 48.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | 63.8 | +0.92 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 64.3 | +0.95 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 72.0 | +1.47 | 실측 | [[aa-lcr]] 89.0%×1.0 |
| 지시 따르기 | 63.4 | +0.9 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
