---
type: Model
title: Devstral Small 2
creator: Mistral
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0
output_speed_tps: 133.0
context_window: 256000
status: current
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 26.6, z: -0.69, r: 39.6, estimated: false }  # 전문 지식
  reasoning: { s: 18.0, z: -0.83, r: 37.6, estimated: false }  # 추론
  coding: { s: 39.8, z: -0.31, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 21.9, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.63, r: 40.6, estimated: false }  # 신뢰성
  multimodal: { s: 42.3, z: -1.39, r: 29.1, estimated: false }  # 멀티모달
  long_context: { s: 32.5, z: -0.54, r: 41.9, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.09, r: 33.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Devstral Small 2

Mistral · Open · Small(24B) · 컨텍스트 256k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 133.0 t/s · TTFT 2.22s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.6 | -0.69 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.6 | -0.83 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 45.4 | -0.31 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 29.1 | -1.39 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 41.9 | -0.54 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 33.6 | -1.09 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
