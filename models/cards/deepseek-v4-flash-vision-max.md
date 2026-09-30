---
type: Model
title: DeepSeek V4 Flash Vision (max)
creator: DeepSeek
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 0.2298
output_speed_tps: 216.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.1, z: 1.1, r: 66.6, estimated: false }  # 전문 지식
  reasoning: { s: 61.2, z: 1.14, r: 67.1, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.23, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.56, r: 73.4, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.89, r: 36.7, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 84.1, z: 1.25, r: 68.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash Vision (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# DeepSeek V4 Flash Vision (max)

DeepSeek · Proprietary · Large · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.44 · 출력 $1.32 · 혼합 $0.2298/1M · 216.0 t/s · TTFT 0.96s · 1M ctx` · 가성비 152.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.6 | +1.1 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 67.1 | +1.14 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 68.4 | +1.23 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 73.4 | +1.56 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 36.7 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 68.8 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
