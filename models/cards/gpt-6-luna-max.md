---
type: Model
title: GPT-6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 27.8552004938153
price_blended_usd_1m: 0.077
output_speed_tps: 102.56914401537703
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.1, z: 0.2, r: 52.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.8, z: 0.86, r: 62.9, estimated: false }  # 추론
  coding: { s: 78.5, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 81.4, z: 1.27, r: 69.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.2, z: 0.81, r: 62.2, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 63.7, z: 0.42, r: 56.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **27.8552004938153**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 102.56914401537703 t/s · TTFT 69.78315473347425s · 1M ctx` · 가성비 361.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.9 | +0.2 | 실측 | [[humanitys-last-exam]] 38.5078776645042%×0.3 |
| 추론 | 62.9 | +0.86 | 실측 | [[critpt]] 19.428571428571402%×1.0, [[humanitys-last-exam]] 38.5078776645042%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 54.6296296296296%×1.0 |
| 에이전트 | 69.1 | +1.27 | 실측 | [[gdpval]] 1443.29%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.2 | +0.81 | 실측 | [[mmmu-pro]] 79.6531791907514%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.3333333333333%×1.0 |
| 지시 따르기 | 56.3 | +0.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
