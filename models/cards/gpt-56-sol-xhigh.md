---
type: Model
title: GPT-5.6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 4.35
output_speed_tps: 72.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 94.1, z: 2.49, r: 87.3, estimated: false }  # 전문 지식
  reasoning: { s: 91.3, z: 2.86, r: 92.9, estimated: false }  # 추론
  coding: { s: 93.0, z: 1.91, r: 78.7, estimated: false }  # 코딩
  agentic: { s: 90.5, z: 2.1, r: 81.5, estimated: false }  # 에이전트
  trust: { s: 11.5, z: -0.79, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: 97.1, z: 1.23, r: 68.4, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.3, r: 69.5, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.24, r: 68.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# GPT-5.6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 72.0 t/s · TTFT 48.9s · 1M ctx` · 가성비 13.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.3 | +2.49 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 92.9 | +2.86 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 78.7 | +1.91 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 81.5 | +2.1 | 실측 | [[gdpval]] 59.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 33.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 38.2 | -0.79 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 68.4 | +1.23 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.5 | +1.3 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
