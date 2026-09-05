---
type: Model
title: DeepSeek V4 Flash 0731 (max)
creator: DeepSeek
license: Open
intelligence_index: 41.0
price_blended_usd_1m: 0.2298
output_speed_tps: 135.0
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 68.8, z: 1.35, r: 70.2, estimated: false }  # 전문 지식
  reasoning: { s: 70.9, z: 1.73, r: 75.9, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.45, r: 71.8, estimated: false }  # 코딩
  agentic: { s: 76.4, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 80.5, z: 1.17, r: 67.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash 0731 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# DeepSeek V4 Flash 0731 (max)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.44 · 출력 $1.32 · 혼합 $0.2298/1M · 135.0 t/s · TTFT 1.13s · 1M ctx` · 가성비 178.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.2 | +1.35 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 75.9 | +1.73 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 71.8 | +1.45 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.5 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
