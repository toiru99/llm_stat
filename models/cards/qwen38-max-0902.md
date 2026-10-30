---
type: Model
title: Qwen3.8 Max (0902)
creator: Alibaba
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.175
output_speed_tps: 41.0
context_window: 984000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.1, z: 1.58, r: 73.6, estimated: false }  # 전문 지식
  reasoning: { s: 68.5, z: 1.03, r: 65.4, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 86.0, z: 1.78, r: 76.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.05, r: 65.7, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 80.5, z: 1.16, r: 67.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max (0902)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Qwen3.8 Max (0902)

Alibaba · Proprietary · Unknown · 컨텍스트 984k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 41.0 t/s · TTFT 3.01s · 984k ctx` · 가성비 28.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.6 | +1.58 | 실측 | [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 65.4 | +1.03 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 76.7 | +1.78 | 실측 | [[apex-agents]] 42.0%×1.0, [[gdpval]] 1674.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 48.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.7 | +1.05 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
