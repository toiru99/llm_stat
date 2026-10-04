---
type: Model
title: Llama 4 Scout
creator: Meta
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.239
output_speed_tps: 108.0
context_window: 10000000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.5, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.7, z: -0.72, r: 39.2, estimated: false }  # 추론
  coding: { s: 16.6, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 6.0, z: -1.25, r: 31.2, estimated: false }  # 에이전트
  trust: { s: 19.6, z: -0.32, r: 45.2, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -0.97, r: 35.5, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.61, r: 40.8, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.62, r: 40.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Scout
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Llama 4 Scout

Meta · Open · Medium · 컨텍스트 10M · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.19 · 출력 $0.68 · 혼합 $0.239/1M · 108.0 t/s · TTFT 0.83s · 10M ctx` · 가성비 33.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.2 | -0.72 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 31.2 | -1.25 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 15.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 45.2 | -0.32 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 35.5 | -0.97 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 40.8 | -0.61 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 40.7 | -0.62 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
