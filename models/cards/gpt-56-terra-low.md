---
type: Model
title: GPT-5.6 Terra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.74
output_speed_tps: 112.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.7, z: 1.38, r: 70.7, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 1.03, r: 65.5, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.22, r: 68.2, estimated: false }  # 코딩
  agentic: { s: 55.6, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: 12.6, z: -0.74, r: 38.9, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 67.6, z: 0.59, r: 58.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-5.6 Terra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 112.0 t/s · TTFT 1.58s · 1M ctx` · 가성비 23.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.7 | +1.38 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 65.5 | +1.03 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 68.2 | +1.22 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[gdpval]] 38.0%×1.0, [[tau2-bench]] 61.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 38.9 | -0.74 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 58.9 | +0.59 | 실측 | [[ifbench]] 60.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
