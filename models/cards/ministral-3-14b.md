---
type: Model
title: Ministral 3 14B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.074
output_speed_tps: 75.5573839730712
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.4, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 20.8, z: -0.65, r: 40.2, estimated: false }  # 코딩
  agentic: { s: 18.9, z: -0.9, r: 36.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 47.1, z: -1.24, r: 31.4, estimated: false }  # 멀티모달
  long_context: { s: 29.7, z: -0.71, r: 39.4, estimated: false }  # 긴문맥
  instruction: { s: 28.0, z: -1.08, r: 33.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Ministral 3 14B

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.2 · 혼합 $0.074/1M · 75.5573839730712 t/s · TTFT 2.38428755583676s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[gpqa-diamond]] 57.1717171717172%×0.4, [[humanitys-last-exam]] 4.6339202965709%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.1717171717172%×1.0, [[humanitys-last-exam]] 4.6339202965709%×1.0 |
| 코딩 | 40.2 | -0.65 | 실측 | [[scicode]] 23.842592592592602%×1.0, [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 36.6 | -0.9 | 실측 | [[gdpval]] 254.5%×1.0, [[tau2-bench]] 27.192982456140403%×1.0, [[tau3-banking]] 6.5979381443299%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 31.4 | -1.24 | 실측 | [[mmmu-pro]] 49.8265895953757%×1.0 |
| 긴문맥 | 39.4 | -0.71 | 실측 | [[aa-lcr]] 26.333333333333297%×1.0 |
| 지시 따르기 | 33.8 | -1.08 | 실측 | [[ifbench]] 32.0408163265306%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
