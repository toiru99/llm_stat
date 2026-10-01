---
type: Model
title: DeepSeek V4 Pro 0813 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.6908
output_speed_tps: 166.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.9, z: 0.39, r: 55.8, estimated: false }  # 전문 지식
  reasoning: { s: 8.3, z: -1.28, r: 30.8, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.64, r: 59.6, estimated: false }  # 코딩
  agentic: { s: 41.8, z: 0.12, r: 51.8, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.95, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.3, z: 0.17, r: 52.6, estimated: false }  # 긴문맥
  instruction: { s: 50.2, z: -0.17, r: 47.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# DeepSeek V4 Pro 0813 (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 166.0 t/s · TTFT 2.06s · 1M ctx` · 가성비 29.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.8 | +0.39 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 30.8 | -1.28 | 실측 | [[critpt]] 0.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 59.6 | +0.64 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 51.8 | +0.12 | 실측 | [[gdpval]] 28.0%×1.0 |
| 신뢰성 | 35.7 | -0.95 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.6 | +0.17 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 47.5 | -0.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
