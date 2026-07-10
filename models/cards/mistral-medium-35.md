---
type: Model
title: Mistral Medium 3.5
creator: Mistral
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 1.16
output_speed_tps: 102.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.8, z: 0.27, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 33.5, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 61.1, z: 0.65, r: 59.7, estimated: false }  # 코딩
  agentic: { s: 55.2, z: 0.75, r: 61.2, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.36, r: 44.6, estimated: false }  # 신뢰성
  multimodal: { s: 72.5, z: 0.05, r: 50.7, estimated: false }  # 멀티모달
  long_context: { s: 80.3, z: 0.95, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Mistral Medium 3.5

Mistral · Open · Unknown · 컨텍스트 256k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $1.16/1M · 102.0 t/s · TTFT 2.11s · 256k ctx` · 가성비 25.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.27 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 59.7 | +0.65 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 61.2 | +0.75 | 실측 | [[gdpval]] 21.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 50.7 | +0.05 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 64.2 | +0.95 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
