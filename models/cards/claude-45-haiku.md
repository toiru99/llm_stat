---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 0.77
output_speed_tps: 96.0
context_window: 200000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.1, z: -0.33, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.68, r: 60.2, estimated: false }  # 코딩
  agentic: { s: 37.9, z: 0.02, r: 50.3, estimated: false }  # 에이전트
  trust: { s: 73.2, z: 2.3, r: 84.5, estimated: false }  # 신뢰성
  multimodal: { s: 61.1, z: -0.45, r: 43.3, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 1.05, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.27, r: 54.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 96.0 t/s · TTFT 19.58s · 200k ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.33 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 60.2 | +0.68 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 50.3 | +0.02 | 실측 | [[gdpval]] 18.0%×1.0, [[itbench]] 27.0%×1.0, [[tau2-bench]] 55.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 84.5 | +2.3 | 실측 | [[aa-omniscience]] 73.0%×1.0 |
| 멀티모달 | 43.3 | -0.45 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 65.7 | +1.05 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 54.0 | +0.27 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
