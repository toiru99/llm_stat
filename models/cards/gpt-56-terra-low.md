---
type: Model
title: GPT-5.6 Terra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.74
output_speed_tps: 116.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.7, z: 1.39, r: 70.8, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 1.05, r: 65.8, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.23, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 57.8, z: 0.83, r: 62.5, estimated: false }  # 에이전트
  trust: { s: 12.6, z: -0.73, r: 39.0, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 67.6, z: 0.6, r: 59.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# GPT-5.6 Terra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 116.0 t/s · TTFT 1.54s · 1M ctx` · 가성비 23.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.8 | +1.39 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 65.8 | +1.05 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 68.5 | +1.23 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 62.5 | +0.83 | 실측 | [[gdpval]] 38.0%×1.0, [[tau2-bench]] 61.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 39.0 | -0.73 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 59.0 | +0.6 | 실측 | [[ifbench]] 60.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
