---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 3.08
output_speed_tps: 72.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.1, z: 2.18, r: 82.7, estimated: false }  # 전문 지식
  reasoning: { s: 79.7, z: 2.15, r: 82.2, estimated: false }  # 추론
  coding: { s: 90.3, z: 2.04, r: 80.7, estimated: false }  # 코딩
  agentic: { s: 80.7, z: 1.65, r: 74.8, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 91.7, z: 1.06, r: 66.0, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 72.0 t/s · TTFT 6.91s · 1M ctx` · 가성비 14.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.7 | +2.18 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 82.2 | +2.15 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 80.7 | +2.04 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 74.8 | +1.65 | 실측 | [[gdpval]] 48.0%×1.0, [[tau2-bench]] 81.0%×1.0, [[tau3-banking]] 36.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 66.0 | +1.06 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
