---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.77
output_speed_tps: 99.0
context_window: 200000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.7, z: -0.32, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.4, z: -0.32, r: 45.3, estimated: false }  # 추론
  coding: { s: 61.4, z: 0.58, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 39.2, z: 0.14, r: 52.1, estimated: false }  # 에이전트
  trust: { s: 83.9, z: 2.53, r: 87.9, estimated: false }  # 신뢰성
  multimodal: { s: 62.9, z: -0.43, r: 43.5, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.24, r: 53.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 99.0 t/s · TTFT 15.71s · 200k ctx` · 가성비 39.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.32 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 45.3 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 58.8 | +0.58 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 52.1 | +0.14 | 실측 | [[gdpval]] 21.0%×1.0, [[itbench]] 27.0%×1.0, [[tau2-bench]] 55.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 87.9 | +2.53 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 43.5 | -0.43 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 53.6 | +0.24 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
