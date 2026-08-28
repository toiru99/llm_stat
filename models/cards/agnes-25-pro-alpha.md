---
type: Model
title: Agnes 2.5 Pro Alpha
creator: Sapiens AI
license: Open
intelligence_index: 40.0
price_blended_usd_1m: 0.1827
output_speed_tps: 130.0
context_window: 1000000
status: current
size_class: Large
params_b: 397
is_reasoning: true
radar:
  knowledge: { s: 62.2, z: 1.07, r: 66.1, estimated: false }  # 전문 지식
  reasoning: { s: 62.4, z: 1.41, r: 71.2, estimated: false }  # 추론
  coding: { s: 70.0, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 36.8, z: -0.0, r: 50.0, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.65, r: 40.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 75.4, z: 0.97, r: 64.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Alpha
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Agnes 2.5 Pro Alpha

Sapiens AI · Open · Large(397B) · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.45 · 출력 $0.9 · 혼합 $0.1827/1M · 130.0 t/s · TTFT 1.95s · 1M ctx` · 가성비 218.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.07 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 71.2 | +1.41 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 50.0 | +-0.0 | 실측 | [[gdpval]] 33.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 40.2 | -0.65 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 64.6 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
