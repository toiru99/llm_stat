---
type: Model
title: Mistral Medium 3.5
creator: Mistral
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 1.155
output_speed_tps: 143.0
context_window: 256000
status: current
size_class: Medium
params_b: 128
is_reasoning: true
radar:
  knowledge: { s: 44.5, z: 0.18, r: 52.7, estimated: false }  # 전문 지식
  reasoning: { s: 33.8, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 61.1, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 51.8, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.35, r: 44.7, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.02, r: 49.7, estimated: false }  # 멀티모달
  long_context: { s: 78.3, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.1, r: 66.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Mistral Medium 3.5

Mistral · Open · Medium(128B) · 컨텍스트 256k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.155/1M · 143.0 t/s · TTFT 1.75s · 256k ctx` · 가성비 26.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.7 | +0.18 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 59.6 | +0.64 | 실측 | [[gdpval]] 22.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 49.7 | -0.02 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
