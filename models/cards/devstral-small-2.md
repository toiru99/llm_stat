---
type: Model
title: Devstral Small 2
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0
output_speed_tps: 140.0
context_window: 256000
status: current
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.8, z: -0.83, r: 37.6, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.22, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 21.1, z: -0.63, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: 41.7, z: -1.41, r: 28.8, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.54, r: 41.9, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.08, r: 33.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Devstral Small 2

Mistral · Open · Small(24B) · 컨텍스트 256k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 140.0 t/s · TTFT 2.27s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.6 | -0.83 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 46.6 | -0.22 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 40.6 | -0.63 | 실측 | [[gdpval]] 9.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 28.8 | -1.41 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 41.9 | -0.54 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 33.8 | -1.08 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
