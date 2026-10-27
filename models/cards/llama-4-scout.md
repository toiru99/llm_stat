---
type: Model
title: Llama 4 Scout
creator: Meta
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.228
output_speed_tps: 87.0
context_window: 10000000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.5, z: -0.73, r: 39.1, estimated: false }  # 전문 지식
  reasoning: { s: 20.7, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 16.6, z: -0.72, r: 39.2, estimated: false }  # 코딩
  agentic: { s: 5.8, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: 19.6, z: -0.35, r: 44.8, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -1.01, r: 34.9, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.65, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.64, r: 40.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Scout
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Llama 4 Scout

Meta · Open · Medium · 컨텍스트 10M · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.18 · 출력 $0.66 · 혼합 $0.228/1M · 87.0 t/s · TTFT 0.84s · 10M ctx` · 가성비 26.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.2 | -0.72 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[gdpval]] 164.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 34.9 | -1.01 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 40.3 | -0.65 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 40.4 | -0.64 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
