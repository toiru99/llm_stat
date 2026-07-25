---
type: Model
title: Agnes 2.5 Pro Alpha
creator: Sapiens AI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: None
output_speed_tps: 132.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.8, z: 1.02, r: 65.3, estimated: false }  # 전문 지식
  reasoning: { s: 62.3, z: 1.4, r: 71.1, estimated: false }  # 추론
  coding: { s: 70.0, z: 0.97, r: 64.5, estimated: false }  # 코딩
  agentic: { s: 42.4, z: 0.24, r: 53.5, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.03, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: 72.4, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Alpha
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Agnes 2.5 Pro Alpha

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.45 · 출력 $0.9 · 혼합 $None/1M · 132.0 t/s · TTFT 2.23s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.3 | +1.02 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 71.1 | +1.4 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 64.5 | +0.97 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 53.5 | +0.24 | 실측 | [[gdpval]] 33.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 39.9 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.5 | +1.03 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
