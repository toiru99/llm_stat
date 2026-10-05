---
type: Model
title: DeepSeek V4.1 Flash (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.1842
output_speed_tps: 215.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.0, z: -0.3, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 8.3, z: -1.28, r: 30.8, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 61.2, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.87, r: 63.1, estimated: false }  # 신뢰성
  multimodal: { s: 69.9, z: -0.08, r: 48.9, estimated: false }  # 멀티모달
  long_context: { s: 61.8, z: 0.31, r: 54.6, estimated: false }  # 긴문맥
  instruction: { s: 43.9, z: -0.43, r: 43.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# DeepSeek V4.1 Flash (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 215.0 t/s · TTFT 0.96s · 1M ctx` · 가성비 135.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.3 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 30.8 | -1.28 | 실측 | [[critpt]] 0.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[gdpval]] 41.0%×1.0 |
| 신뢰성 | 63.1 | +0.87 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 48.9 | -0.08 | 실측 | [[mmmu-pro]] 66.0%×1.0 |
| 긴문맥 | 54.6 | +0.31 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 43.6 | -0.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
