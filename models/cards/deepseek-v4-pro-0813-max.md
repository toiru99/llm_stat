---
type: Model
title: DeepSeek V4 Pro 0813 (max)
creator: DeepSeek
license: Open
intelligence_index: 36.0
price_blended_usd_1m: 0.6908
output_speed_tps: 107.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.5, z: 1.61, r: 74.2, estimated: false }  # 전문 지식
  reasoning: { s: 73.1, z: 1.66, r: 75.0, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.26, r: 69.0, estimated: false }  # 코딩
  agentic: { s: 74.3, z: 1.35, r: 70.3, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 80.6, z: 1.1, r: 66.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# DeepSeek V4 Pro 0813 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 107.0 t/s · TTFT 1.75s · 1M ctx` · 가성비 52.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.2 | +1.61 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 75.0 | +1.66 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 69.0 | +1.26 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 70.3 | +1.35 | 실측 | [[gdpval]] 47.0%×1.0, [[tau3-banking]] 40.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 66.4 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
