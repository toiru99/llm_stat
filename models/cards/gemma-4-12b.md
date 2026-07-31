---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: 22.0
price_blended_usd_1m: None
output_speed_tps: 27.0
context_window: 256000
status: current
size_class: Small
params_b: 12
is_reasoning: true
radar:
  knowledge: { s: 37.7, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: 0.02, r: 50.2, estimated: false }  # 추론
  coding: { s: 51.3, z: 0.18, r: 52.7, estimated: false }  # 코딩
  agentic: { s: 25.5, z: -0.43, r: 43.6, estimated: false }  # 에이전트
  trust: { s: 20.7, z: -0.35, r: 44.7, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.33, r: 55.0, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.68, r: 60.2, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.41, r: 71.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Gemma 4 12B

Google · Open · Small(12B) · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $None/1M · 27.0 t/s · TTFT 2.67s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 50.2 | +0.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 52.7 | +0.18 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 43.6 | -0.43 | 실측 | [[gdpval]] 8.0%×1.0, [[tau2-bench]] 36.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 55.0 | +0.33 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 60.2 | +0.68 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 71.2 | +1.41 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
