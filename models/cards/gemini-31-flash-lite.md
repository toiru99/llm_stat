---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0.22
output_speed_tps: 297.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.6, z: 0.93, r: 64.0, estimated: false }  # 전문 지식
  reasoning: { s: 39.2, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 58.8, z: 0.54, r: 58.1, estimated: false }  # 코딩
  agentic: { s: 26.0, z: -0.4, r: 44.1, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.37, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: 88.4, z: 0.81, r: 62.1, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.61, r: 74.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.22/1M · 297.0 t/s · TTFT 5.69s · 1M ctx` · 가성비 113.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.0 | +0.93 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 58.1 | +0.54 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 44.1 | -0.4 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 7.0%×1.0, [[tau2-bench]] 31.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 62.1 | +0.81 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 74.2 | +1.61 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
