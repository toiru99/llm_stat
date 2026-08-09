---
type: Model
title: Agnes 2.5 Pro Alpha
creator: Sapiens AI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.1827
output_speed_tps: 130.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.0, z: 1.02, r: 65.3, estimated: false }  # 전문 지식
  reasoning: { s: 62.8, z: 1.38, r: 70.7, estimated: false }  # 추론
  coding: { s: 70.0, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 37.1, z: 0.06, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 11.6, z: -0.67, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 73.0, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Agnes 2.5 Pro Alpha
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Agnes 2.5 Pro Alpha

Sapiens AI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.45 · 출력 $0.9 · 혼합 $0.1827/1M · 130.0 t/s · TTFT 2.57s · 1M ctx` · 가성비 218.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.3 | +1.02 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 70.7 | +1.38 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 50.8 | +0.06 | 실측 | [[gdpval]] 34.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
