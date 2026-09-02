---
type: Model
title: GPT-5.6 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 1.74
output_speed_tps: 105.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.0, z: 1.83, r: 77.4, estimated: false }  # 전문 지식
  reasoning: { s: 87.9, z: 2.68, r: 90.2, estimated: false }  # 추론
  coding: { s: 87.4, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 84.1, z: 1.83, r: 77.5, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.67, r: 40.0, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.42, r: 71.4, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# GPT-5.6 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 105.0 t/s · TTFT 162.76s · 1M ctx` · 가성비 32.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.4 | +1.83 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 90.2 | +2.68 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 54.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 77.5 | +1.83 | 실측 | [[apex-agents]] 39.0%×1.0, [[gdpval]] 53.0%×1.0, [[itbench]] 51.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 40.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 40.0 | -0.67 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 71.4 | +1.42 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
