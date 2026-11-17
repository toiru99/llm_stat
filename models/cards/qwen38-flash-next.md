---
type: Model
title: Qwen3.8-Flash-Next
creator: Alibaba
license: Open
intelligence_index: 28.5750026655353
price_blended_usd_1m: 0.0882
output_speed_tps: 84.227221129545
context_window: 256000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.41, r: 71.1, estimated: false }  # 전문 지식
  reasoning: { s: 59.1, z: 1.17, r: 67.6, estimated: false }  # 추론
  coding: { s: 71.8, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 89.1, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.8, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 73.1, z: 0.81, r: 62.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8-Flash-Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.8-Flash-Next

Alibaba · Open · Large · 컨텍스트 256k · 종합지능 **28.5750026655353**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.47 · 혼합 $0.0882/1M · 84.227221129545 t/s · TTFT 2.4286190985842557s · 256k ctx` · 가성비 324.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.1 | +1.41 | 실측 | [[gpqa-diamond]] 92.32323232323229%×0.4, [[humanitys-last-exam]] 38.044485634847106%×0.3 |
| 추론 | 67.6 | +1.17 | 실측 | [[critpt]] 11.1428571428571%×1.0, [[gpqa-diamond]] 92.32323232323229%×1.0, [[humanitys-last-exam]] 38.044485634847106%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 50.578703703703695%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 1636.77%×1.0, [[tau3-banking]] 45.360824742268%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 78.61271676300579%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 62.2 | +0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
