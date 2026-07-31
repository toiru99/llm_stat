---
type: Model
title: MiMo-V2-Omni
creator: Xiaomi
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.5, z: 0.15, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 42.2, z: 0.39, r: 55.8, estimated: false }  # 추론
  coding: { s: 58.8, z: 0.49, r: 57.4, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 1.41, r: 71.1, estimated: false }  # 에이전트
  trust: { s: 63.2, z: 1.66, r: 74.9, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.33, r: 55.0, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.25, r: 53.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# MiMo-V2-Omni

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.15 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 55.8 | +0.39 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 57.4 | +0.49 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 71.1 | +1.41 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 74.9 | +1.66 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 55.0 | +0.33 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 53.8 | +0.25 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
