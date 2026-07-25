---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: None
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.4, z: 2.36, r: 85.5, estimated: false }  # 전문 지식
  reasoning: { s: 81.9, z: 2.39, r: 85.9, estimated: false }  # 추론
  coding: { s: 94.0, z: 1.97, r: 79.6, estimated: false }  # 코딩
  agentic: { s: 83.5, z: 1.82, r: 77.4, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.1, r: 66.4, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.18, r: 67.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $None/1M · 55.0 t/s · TTFT 15.94s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.5 | +2.36 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 85.9 | +2.39 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 79.6 | +1.97 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 77.4 | +1.82 | 실측 | [[gdpval]] 53.0%×1.0, [[tau2-bench]] 81.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 39.9 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 66.4 | +1.1 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
