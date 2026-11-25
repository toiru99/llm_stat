---
type: Model
title: Ministral 3 14B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.074
output_speed_tps: 83.8267980001295
context_window: 256000
status: current
size_class: Small
params_b: 14
is_reasoning: false
radar:
  knowledge: { s: 33.4, z: -0.65, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 20.8, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 18.9, z: -0.99, r: 35.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 47.1, z: -1.24, r: 31.4, estimated: false }  # 멀티모달
  long_context: { s: 29.7, z: -0.86, r: 37.1, estimated: false }  # 긴문맥
  instruction: { s: 28.0, z: -0.93, r: 36.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Ministral 3 14B

Mistral · Open · Small(14B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.2 · 혼합 $0.074/1M · 83.8267980001295 t/s · TTFT 2.53533136211229s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.65 | 실측 | [[gpqa-diamond]] 57.1717%×0.4, [[humanitys-last-exam]] 4.63392%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 57.1717%×1.0, [[humanitys-last-exam]] 4.63392%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[scicode]] 23.8426%×1.0, [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 35.1 | -0.99 | 실측 | [[gdpval]] 254.51 Elo×1.0, [[tau2-bench]] 27.193%×1.0, [[tau3-banking]] 6.59794%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 31.4 | -1.24 | 실측 | [[mmmu-pro]] 49.8266%×1.0 |
| 긴문맥 | 37.1 | -0.86 | 실측 | [[aa-lcr]] 26.3333%×1.0 |
| 지시 따르기 | 36.0 | -0.93 | 실측 | [[ifbench]] 32.0408%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
