---
type: Model
title: Mistral Medium 3.5
creator: Mistral
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 1.155
output_speed_tps: None
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.5, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.57, r: 41.4, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.54, r: 58.1, estimated: false }  # 코딩
  agentic: { s: 40.2, z: 0.2, r: 53.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.19, r: 47.1, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.14, r: 67.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-06
timestamp: 2026-11-06T00:00:00Z
---

# Mistral Medium 3.5

Mistral · Open · Medium · 컨텍스트 256k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.155/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 41.4 | -0.57 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 58.1 | +0.54 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 53.0 | +0.2 | 실측 | [[gdpval]] 769.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.1 | -0.19 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
