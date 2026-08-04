---
type: Model
title: DeepSeek V4 Flash 0731 (max)
creator: DeepSeek
license: Open
intelligence_index: 50.0
price_blended_usd_1m: 0.058
output_speed_tps: 113.0
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 70.2, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 72.9, z: 1.93, r: 79.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 84.6, z: 1.87, r: 78.1, estimated: false }  # 에이전트
  trust: { s: 17.2, z: -0.52, r: 42.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 79.6, z: 1.09, r: 66.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash 0731 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# DeepSeek V4 Flash 0731 (max)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · 113.0 t/s · TTFT 1.31s · 1M ctx` · 가성비 862.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 79.0 | +1.93 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 78.1 | +1.87 | 실측 | [[gdpval]] 53.0%×1.0, [[tau3-banking]] 31.0%×1.0 |
| 신뢰성 | 42.2 | -0.52 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 66.4 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
