---
type: Model
title: Nemotron 3 Nano Omni 30B A3B Reasoning
creator: NVIDIA
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.1
output_speed_tps: 317.0
context_window: 256000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 25.4, z: -0.73, r: 39.1, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 35.2, z: -0.46, r: 43.0, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.42, r: 43.7, estimated: false }  # 신뢰성
  multimodal: { s: 55.1, z: -0.78, r: 38.3, estimated: false }  # 멀티모달
  long_context: { s: 47.4, z: -0.03, r: 49.5, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.81, r: 62.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B Reasoning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B Reasoning

NVIDIA · Open · Small(30B) · 컨텍스트 256k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.1/1M · 317.0 t/s · TTFT 1.0s · 256k ctx` · 가성비 150.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 43.0 | -0.46 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 43.7 | -0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 38.3 | -0.78 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 49.5 | -0.03 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 62.1 | +0.81 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
