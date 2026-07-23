---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: None
output_speed_tps: 97.0
context_window: 200000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.7, z: -0.29, r: 45.7, estimated: false }  # 전문 지식
  reasoning: { s: 28.4, z: -0.28, r: 45.8, estimated: false }  # 추론
  coding: { s: 61.4, z: 0.63, r: 59.4, estimated: false }  # 코딩
  agentic: { s: 41.0, z: 0.18, r: 52.7, estimated: false }  # 에이전트
  trust: { s: 83.9, z: 2.69, r: 90.4, estimated: false }  # 신뢰성
  multimodal: { s: 63.8, z: -0.39, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.26, r: 53.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $None/1M · 97.0 t/s · TTFT 12.42s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.7 | -0.29 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 45.8 | -0.28 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 59.4 | +0.63 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 52.7 | +0.18 | 실측 | [[gdpval]] 21.0%×1.0, [[itbench]] 27.0%×1.0, [[tau2-bench]] 55.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 90.4 | +2.69 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 44.2 | -0.39 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 53.9 | +0.26 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
