---
type: Model
title: Devstral Small 2
creator: Mistral
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0
output_speed_tps: 138.0
context_window: 256000
status: current
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 26.3, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 18.1, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 40.8, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 22.1, z: -0.58, r: 41.2, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.67, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: 42.9, z: -1.45, r: 28.3, estimated: false }  # 멀티모달
  long_context: { s: 32.5, z: -0.55, r: 41.7, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.13, r: 33.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Devstral Small 2

Mistral · Open · Small(24B) · 컨텍스트 256k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 138.0 t/s · TTFT 2.19s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 41.2 | -0.58 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 28.3 | -1.45 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 41.7 | -0.55 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 33.1 | -1.13 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
