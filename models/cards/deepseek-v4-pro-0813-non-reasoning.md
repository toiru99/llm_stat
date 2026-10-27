---
type: Model
title: DeepSeek V4 Pro 0813 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.6908
output_speed_tps: 104.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.9, z: 0.36, r: 55.4, estimated: false }  # 전문 지식
  reasoning: { s: 8.3, z: -1.31, r: 30.4, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.58, r: 58.7, estimated: false }  # 코딩
  agentic: { s: 57.0, z: 0.77, r: 61.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.96, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.3, z: 0.13, r: 52.0, estimated: false }  # 긴문맥
  instruction: { s: 48.2, z: -0.27, r: 46.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# DeepSeek V4 Pro 0813 (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 104.0 t/s · TTFT 1.79s · 1M ctx` · 가성비 29.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.4 | +0.36 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 30.4 | -1.31 | 실측 | [[critpt]] 0.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 58.7 | +0.58 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 61.5 | +0.77 | 실측 | [[gdpval]] 1066.0%×1.0 |
| 신뢰성 | 35.7 | -0.96 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.0 | +0.13 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 46.0 | -0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
