---
type: Model
title: GPT-5.6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: None
output_speed_tps: 53.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.5, z: 2.23, r: 83.5, estimated: false }  # 전문 지식
  reasoning: { s: 70.4, z: 1.81, r: 77.2, estimated: false }  # 추론
  coding: { s: 91.9, z: 1.88, r: 78.2, estimated: false }  # 코딩
  agentic: { s: 77.8, z: 1.6, r: 74.0, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.1, r: 66.4, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.01, r: 65.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# GPT-5.6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $None/1M · 53.0 t/s · TTFT 2.97s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.5 | +2.23 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 77.2 | +1.81 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 78.2 | +1.88 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 74.0 | +1.6 | 실측 | [[gdpval]] 47.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 24.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 39.9 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 66.4 | +1.1 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 65.1 | +1.01 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
