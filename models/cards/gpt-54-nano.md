---
type: Model
title: GPT-5.4 nano
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.18
output_speed_tps: 158.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.8, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.4, z: 0.37, r: 55.6, estimated: false }  # 추론
  coding: { s: 58.9, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 51.8, z: 0.61, r: 59.2, estimated: false }  # 에이전트
  trust: { s: 57.6, z: 1.42, r: 71.3, estimated: false }  # 신뢰성
  multimodal: { s: 65.2, z: -0.3, r: 45.6, estimated: false }  # 멀티모달
  long_context: { s: 75.0, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.87, r: 63.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.4 nano

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.18/1M · 158.0 t/s · TTFT 4.3s · 400k ctx` · 가성비 166.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 55.6 | +0.37 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 59.2 | +0.61 | 실측 | [[tau2-bench]] 53.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 71.3 | +1.42 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 45.6 | -0.3 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
