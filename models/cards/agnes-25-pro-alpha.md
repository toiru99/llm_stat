---
type: Model
title: Agnes 2.5 Pro Alpha
creator: Sapiens AI
license: Open
intelligence_index: 27.0
price_blended_usd_1m: 0.187
output_speed_tps: 161.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.0, z: 0.86, r: 63.0, estimated: false }  # 전문 지식
  reasoning: { s: 60.0, z: 1.14, r: 67.1, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.86, r: 62.9, estimated: false }  # 코딩
  agentic: { s: 23.5, z: -0.55, r: 41.8, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.72, r: 39.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 73.5, z: 0.82, r: 62.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Alpha
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Agnes 2.5 Pro Alpha

Sapiens AI · Open · Large · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.45 · 출력 $0.9 · 혼합 $0.187/1M · 161.0 t/s · TTFT 4.28s · 1M ctx` · 가성비 144.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.0 | +0.86 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 67.1 | +1.14 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 62.9 | +0.86 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 41.8 | -0.55 | 실측 | [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 39.3 | -0.72 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 62.3 | +0.82 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
