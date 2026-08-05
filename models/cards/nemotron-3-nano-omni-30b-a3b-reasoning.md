---
type: Model
title: Nemotron 3 Nano Omni 30B A3B Reasoning
creator: NVIDIA
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.0975
output_speed_tps: 323.0
context_window: 256000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 25.4, z: -0.75, r: 38.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.87, r: 37.0, estimated: false }  # 추론
  coding: { s: 35.2, z: -0.5, r: 42.5, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.67, r: 39.9, estimated: false }  # 에이전트
  trust: { s: 18.4, z: -0.47, r: 43.0, estimated: false }  # 신뢰성
  multimodal: { s: 54.3, z: -0.84, r: 37.4, estimated: false }  # 멀티모달
  long_context: { s: 47.4, z: -0.07, r: 49.0, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.77, r: 61.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B Reasoning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B Reasoning

NVIDIA · Open · Small(30B) · 컨텍스트 256k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.0975/1M · 323.0 t/s · TTFT 1.0s · 256k ctx` · 가성비 153.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.0 | -0.87 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.5 | -0.5 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.9 | -0.67 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 37.4 | -0.84 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 49.0 | -0.07 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 61.6 | +0.77 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
