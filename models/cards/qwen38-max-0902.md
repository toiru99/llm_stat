---
type: Model
title: Qwen3.8 Max (0902)
creator: Alibaba
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 1.175
output_speed_tps: 36.0
context_window: 984000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.95, r: 64.3, estimated: false }  # 전문 지식
  reasoning: { s: 74.3, z: 1.71, r: 75.6, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 85.2, z: 1.76, r: 76.4, estimated: false }  # 에이전트
  trust: { s: 71.1, z: 2.05, r: 80.8, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.08, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 0.92, r: 63.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max (0902)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Qwen3.8 Max (0902)

Alibaba · Proprietary · Unknown · 컨텍스트 984k · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 36.0 t/s · TTFT 2.93s · 984k ctx` · 가성비 38.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.3 | +0.95 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 75.6 | +1.71 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 76.4 | +1.76 | 실측 | [[apex-agents]] 42.0%×1.0, [[gdpval]] 59.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 48.0%×1.0 |
| 신뢰성 | 80.8 | +2.05 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | 66.3 | +1.08 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 63.9 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
