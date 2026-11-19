---
type: Model
title: GPT-6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 9.66610812336462
price_blended_usd_1m: 0.077
output_speed_tps: 87.1092053923871
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 26.2, z: -1.02, r: 34.7, estimated: false }  # 전문 지식
  reasoning: { s: 16.7, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 65.7, z: 0.87, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.0, z: 0.54, r: 58.1, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.89, r: 63.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.25, r: 46.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GPT-6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.66610812336462**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 87.1092053923871 t/s · TTFT 2.45029849201748s · 1M ctx` · 가성비 125.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.7 | -1.02 | 실측 | [[humanitys-last-exam]] 20.2502316960148%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[critpt]] 2.57142857142857%×1.0, [[humanitys-last-exam]] 20.2502316960148%×1.0 |
| 코딩 | 63.1 | +0.87 | 실측 | [[scicode]] 46.875%×1.0 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[gdpval]] 1039.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.1 | +0.54 | 실측 | [[mmmu-pro]] 75.9537572254335%×1.0 |
| 긴문맥 | 63.3 | +0.89 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
