---
type: Model
title: GPT-6.1 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 0.735
output_speed_tps: 91.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 0.91, r: 63.6, estimated: false }  # 전문 지식
  reasoning: { s: 77.4, z: 1.43, r: 71.5, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 1.32, r: 69.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.12, r: 66.8, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 81.8, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-6.1 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 91.0 t/s · TTFT 12.98s · 1M ctx` · 가성비 57.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.6 | +0.91 | 실측 | [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 71.5 | +1.43 | 실측 | [[critpt]] 61.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 69.7 | +1.32 | 실측 | [[gdpval]] 1353.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.8 | +1.12 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
