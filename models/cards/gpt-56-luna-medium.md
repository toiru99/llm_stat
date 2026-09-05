---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.174
output_speed_tps: 106.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.4, z: 1.13, r: 67.0, estimated: false }  # 전문 지식
  reasoning: { s: 49.0, z: 0.67, r: 60.1, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.88, r: 63.1, estimated: true }  # 코딩
  agentic: { s: 45.1, z: 0.29, r: 54.4, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 84.7, z: 0.72, r: 60.8, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.08, r: 66.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 106.0 t/s · TTFT 3.06s · 1M ctx` · 가성비 172.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.0 | +1.13 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 60.1 | +0.67 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 63.1 | +0.88 | 추정 | (추정) |
| 에이전트 | 54.4 | +0.29 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 60.8 | +0.72 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
