---
type: Model
title: Mistral Medium 3.5
creator: Mistral
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 1.155
output_speed_tps: 132.0
context_window: 256000
status: current
size_class: Medium
params_b: 128
is_reasoning: true
radar:
  knowledge: { s: 43.9, z: 0.16, r: 52.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.0, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 59.7, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 51.5, z: 0.55, r: 58.2, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.2, estimated: false }  # 신뢰성
  multimodal: { s: 70.4, z: -0.0, r: 49.9, estimated: false }  # 멀티모달
  long_context: { s: 78.3, z: 0.86, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.14, r: 67.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Mistral Medium 3.5

Mistral · Open · Medium(128B) · 컨텍스트 256k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.155/1M · 132.0 t/s · TTFT 2.28s · 256k ctx` · 가성비 26.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.4 | +0.16 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 58.2 | +0.55 | 실측 | [[gdpval]] 22.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 49.9 | +-0.0 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 62.8 | +0.86 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
