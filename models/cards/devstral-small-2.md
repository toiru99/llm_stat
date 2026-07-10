---
type: Model
title: Devstral Small 2
creator: Mistral
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.0
output_speed_tps: 53.0
context_window: 256000
status: current
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.8, r: 38.1, estimated: false }  # 추론
  coding: { s: 40.8, z: -0.21, r: 46.8, estimated: false }  # 코딩
  agentic: { s: 24.2, z: -0.46, r: 43.1, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 43.5, z: -1.33, r: 30.0, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.49, r: 42.6, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.05, r: 34.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Devstral Small 2

Mistral · Open · Small(24B) · 컨텍스트 256k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · 53.0 t/s · TTFT 1.2s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.1 | -0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 46.8 | -0.21 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 43.1 | -0.46 | 실측 | [[gdpval]] 11.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 30.0 | -1.33 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 42.6 | -0.49 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 34.3 | -1.05 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
