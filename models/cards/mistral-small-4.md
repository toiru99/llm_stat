---
type: Model
title: Mistral Small 4
creator: Mistral
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.2
output_speed_tps: 170.0
context_window: 256000
status: current
size_class: Medium
params_b: 119
is_reasoning: true
radar:
  knowledge: { s: 42.1, z: 0.08, r: 51.2, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.09, r: 48.6, estimated: false }  # 추론
  coding: { s: 50.8, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 22.2, z: -0.54, r: 41.9, estimated: false }  # 에이전트
  trust: { s: 37.6, z: 0.47, r: 57.0, estimated: false }  # 신뢰성
  multimodal: { s: 60.9, z: -0.5, r: 42.4, estimated: false }  # 멀티모달
  long_context: { s: 59.2, z: 0.32, r: 54.8, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.06, r: 49.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# Mistral Small 4

Mistral · Open · Medium(119B) · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.2/1M · 170.0 t/s · TTFT 0.73s · 256k ctx` · 가성비 100.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.2 | +0.08 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 48.6 | -0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 41.9 | -0.54 | 실측 | [[gdpval]] 4.0%×1.0, [[tau2-bench]] 41.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 57.0 | +0.47 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 42.4 | -0.5 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 54.8 | +0.32 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 49.1 | -0.06 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
