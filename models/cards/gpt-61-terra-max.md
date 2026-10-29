---
type: Model
title: GPT-6.1 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 0.735
output_speed_tps: 91.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.0, z: 1.12, r: 66.8, estimated: false }  # 전문 지식
  reasoning: { s: 82.6, z: 1.66, r: 74.9, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.43, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 79.1, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.18, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.14, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GPT-6.1 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 91.0 t/s · TTFT 144.16s · 1M ctx` · 가성비 69.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.8 | +1.12 | 실측 | [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 74.9 | +1.66 | 실측 | [[critpt]] 65.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 71.5 | +1.43 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 1476.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.8 | +1.18 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 67.2 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
