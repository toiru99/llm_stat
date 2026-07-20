---
type: Model
title: Llama 4 Scout
creator: Meta
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.22
output_speed_tps: 89.0
context_window: 10000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.5, z: -0.58, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.65, r: 40.3, estimated: false }  # 추론
  coding: { s: 19.9, z: -1.11, r: 33.3, estimated: false }  # 코딩
  agentic: { s: 6.8, z: -1.15, r: 32.8, estimated: false }  # 에이전트
  trust: { s: 24.7, z: -0.14, r: 47.9, estimated: false }  # 신뢰성
  multimodal: { s: 55.1, z: -0.79, r: 38.1, estimated: false }  # 멀티모달
  long_context: { s: 34.2, z: -0.43, r: 43.5, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.54, r: 41.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Scout
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Llama 4 Scout

Meta · Open · Unknown · 컨텍스트 10M · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.17 · 출력 $0.63 · 혼합 $0.22/1M · 89.0 t/s · TTFT 0.81s · 10M ctx` · 가성비 45.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.58 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.3 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.3 | -1.11 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 32.8 | -1.15 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 15.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 38.1 | -0.79 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 43.5 | -0.43 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 41.9 | -0.54 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
