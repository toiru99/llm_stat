---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 0.174
output_speed_tps: 127.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.8, z: 1.64, r: 74.6, estimated: false }  # 전문 지식
  reasoning: { s: 77.1, z: 2.15, r: 82.3, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.71, r: 75.6, estimated: false }  # 코딩
  agentic: { s: 72.0, z: 1.38, r: 70.7, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.37, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.23, r: 68.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 127.0 t/s · TTFT 151.0s · 1M ctx` · 가성비 298.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.6 | +1.64 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 82.3 | +2.15 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 75.6 | +1.71 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 70.7 | +1.38 | 실측 | [[apex-agents]] 36.0%×1.0, [[gdpval]] 53.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 31.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 70.5 | +1.37 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
