---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: None
output_speed_tps: 60.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.7, z: 2.5, r: 87.6, estimated: false }  # 전문 지식
  reasoning: { s: 87.6, z: 2.81, r: 92.2, estimated: false }  # 추론
  coding: { s: 94.6, z: 2.03, r: 80.4, estimated: false }  # 코딩
  agentic: { s: 90.5, z: 2.11, r: 81.6, estimated: false }  # 에이전트
  trust: { s: 12.6, z: -0.71, r: 39.4, estimated: false }  # 신뢰성
  multimodal: { s: 97.1, z: 1.2, r: 68.1, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.13, r: 67.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $None/1M · 60.0 t/s · TTFT 13.87s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.6 | +2.5 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 92.2 | +2.81 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 80.4 | +2.03 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 62.0%×0.5 |
| 에이전트 | 81.6 | +2.11 | 실측 | [[gdpval]] 56.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 31.0%×1.0, [[terminal-bench]] 62.0%×1.0 |
| 신뢰성 | 39.4 | -0.71 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 68.1 | +1.2 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 67.0 | +1.13 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
