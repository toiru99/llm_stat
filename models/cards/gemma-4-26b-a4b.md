---
type: Model
title: Gemma 4 26B A4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.086
output_speed_tps: 64.54349712938
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.5, z: 0.44, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: -0.03, r: 49.6, estimated: false }  # 추론
  coding: { s: 43.2, z: 0.11, r: 51.6, estimated: false }  # 코딩
  agentic: { s: 32.7, z: -0.42, r: 43.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 74.1, z: 0.61, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 84.7, z: 1.29, r: 69.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Gemma 4 26B A4B

Google · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.095 · 출력 $0.32 · 혼합 $0.086/1M · 64.54349712938 t/s · TTFT 1.38770361583458s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.44 | 실측 | [[gpqa-diamond]] 79.1919191919192%×0.4, [[humanitys-last-exam]] 19.3234476367006%×0.3 |
| 추론 | 49.6 | -0.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.1919191919192%×1.0, [[humanitys-last-exam]] 19.3234476367006%×1.0 |
| 코딩 | 51.6 | +0.11 | 실측 | [[scicode]] 40.046296296296305%×1.0, [[terminal-bench]] 13.639999999999999%×0.5 |
| 에이전트 | 43.7 | -0.42 | 실측 | [[gdpval]] 572.54%×1.0, [[tau2-bench]] 43.5672514619883%×1.0, [[tau3-banking]] 11.9587628865979%×1.0, [[terminal-bench]] 13.639999999999999%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.2485549132948%×1.0 |
| 긴문맥 | 59.1 | +0.61 | 실측 | [[aa-lcr]] 65.6666666666667%×1.0 |
| 지시 따르기 | 69.4 | +1.29 | 실측 | [[ifbench]] 72.4489795918367%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
