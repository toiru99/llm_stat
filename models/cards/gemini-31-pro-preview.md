---
type: Model
title: Gemini 3.1 Pro Preview
creator: Google
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 1.74
output_speed_tps: 103.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.5, z: 2.21, r: 83.2, estimated: false }  # 전문 지식
  reasoning: { s: 78.1, z: 2.14, r: 82.2, estimated: false }  # 추론
  coding: { s: 90.7, z: 1.83, r: 77.5, estimated: false }  # 코딩
  agentic: { s: 62.2, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.13, r: 66.9, estimated: false }  # 신뢰성
  multimodal: { s: 94.4, z: 1.18, r: 67.7, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.37, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.61, r: 74.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 3.1 Pro Preview

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 103.0 t/s · TTFT 24.9s · 1M ctx` · 가성비 27.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.2 | +2.21 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 82.2 | +2.14 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 77.5 | +1.83 | 실측 | [[scicode]] 59.0%×1.0, [[terminal-bench]] 54.0%×0.5 |
| 에이전트 | 64.4 | +0.96 | 실측 | [[apex-agents]] 32.0%×1.0, [[gdpval]] 23.0%×1.0, [[itbench]] 30.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 54.0%×1.0 |
| 신뢰성 | 66.9 | +1.13 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 67.7 | +1.18 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 70.5 | +1.37 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 74.2 | +1.61 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
