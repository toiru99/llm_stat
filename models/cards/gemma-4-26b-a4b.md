---
type: Model
title: Gemma 4 26B A4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.089
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 56.5, z: 0.46, r: 56.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.5, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 43.2, z: 0.19, r: 52.8, estimated: false }  # 코딩
  agentic: { s: 28.9, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 74.1, z: 0.63, r: 59.5, estimated: false }  # 긴문맥
  instruction: { s: 84.7, z: 1.37, r: 70.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Gemma 4 26B A4B

Google · Open · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.34 · 혼합 $0.089/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.9 | +0.46 | 실측 | [[gpqa-diamond]] 79.2%×0.4, [[humanitys-last-exam]] 19.3%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[gpqa-diamond]] 79.2%×1.0, [[humanitys-last-exam]] 19.3%×1.0 |
| 코딩 | 52.8 | +0.19 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 13.6%×0.5 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[gdpval]] 573.0%×1.0, [[itbench]] 23.6%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 13.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 59.5 | +0.63 | 실측 | [[aa-lcr]] 65.7%×1.0 |
| 지시 따르기 | 70.6 | +1.37 | 실측 | [[ifbench]] 72.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
