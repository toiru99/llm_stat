---
type: Model
title: Ministral 3 14B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.074
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.8, z: -0.69, r: 39.7, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 21.1, z: -0.55, r: 41.8, estimated: false }  # 코딩
  agentic: { s: 11.0, z: -0.8, r: 38.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 47.3, z: -1.22, r: 31.7, estimated: false }  # 멀티모달
  long_context: { s: 29.7, z: -0.69, r: 39.6, estimated: false }  # 긴문맥
  instruction: { s: 27.9, z: -1.06, r: 34.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Ministral 3 14B

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.2 · 혼합 $0.074/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.7 | -0.69 | 실측 | [[gpqa-diamond]] 57.2%×0.4, [[humanitys-last-exam]] 4.6%×0.3 |
| 추론 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 57.2%×1.0, [[humanitys-last-exam]] 4.6%×1.0 |
| 코딩 | 41.8 | -0.55 | 실측 | [[scicode]] 23.8%×1.0, [[terminal-bench]] 4.5%×0.5 |
| 에이전트 | 38.0 | -0.8 | 실측 | [[gdpval]] 255.0%×1.0, [[tau3-banking]] 6.6%×1.0, [[terminal-bench]] 4.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 31.7 | -1.22 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 39.6 | -0.69 | 실측 | [[aa-lcr]] 26.3%×1.0 |
| 지시 따르기 | 34.1 | -1.06 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
