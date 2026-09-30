---
type: Model
title: DeepSeek V4 Pro 0813 (max)
creator: DeepSeek
license: Open
intelligence_index: 36.0
price_blended_usd_1m: 0.6908
output_speed_tps: 81.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.5, z: 1.63, r: 74.5, estimated: false }  # 전문 지식
  reasoning: { s: 73.1, z: 1.69, r: 75.3, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 74.3, z: 1.38, r: 70.7, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.08, r: 33.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 80.6, z: 1.11, r: 66.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# DeepSeek V4 Pro 0813 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 81.0 t/s · TTFT 1.7s · 1M ctx` · 가성비 52.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.5 | +1.63 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 75.3 | +1.69 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 70.7 | +1.38 | 실측 | [[gdpval]] 47.0%×1.0, [[tau3-banking]] 40.0%×1.0 |
| 신뢰성 | 33.8 | -1.08 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 66.6 | +1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
