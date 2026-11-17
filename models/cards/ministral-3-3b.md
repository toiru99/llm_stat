---
type: Model
title: Ministral 3 3B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.037
output_speed_tps: 144.2326244169919
context_window: 256000
status: current
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.7, z: -1.33, r: 30.1, estimated: false }  # 전문 지식
  reasoning: { s: 12.0, z: -1.16, r: 32.6, estimated: false }  # 추론
  coding: { s: 9.1, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 13.3, z: -1.08, r: 33.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 31.6, z: -2.03, r: 19.5, estimated: false }  # 멀티모달
  long_context: { s: 19.2, z: -1.01, r: 34.8, estimated: false }  # 긴문맥
  instruction: { s: 20.6, z: -1.38, r: 29.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Ministral 3 3B

Mistral · Open · Tiny · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.1 · 혼합 $0.037/1M · 144.2326244169919 t/s · TTFT 1.738039076203122s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.1 | -1.33 | 실측 | [[gpqa-diamond]] 35.7575757575758%×0.4, [[humanitys-last-exam]] 5.37534754402224%×0.3 |
| 추론 | 32.6 | -1.16 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 35.7575757575758%×1.0, [[humanitys-last-exam]] 5.37534754402224%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[scicode]] 15.277777777777802%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 33.7 | -1.08 | 실측 | [[gdpval]] 36.4%×1.0, [[tau2-bench]] 24.8538011695906%×1.0, [[tau3-banking]] 4.74226804123711%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 19.5 | -2.03 | 실측 | [[mmmu-pro]] 38.092485549132896%×1.0 |
| 긴문맥 | 34.8 | -1.01 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 29.3 | -1.38 | 실측 | [[ifbench]] 26.802721088435398%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
