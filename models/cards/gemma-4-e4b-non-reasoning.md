---
type: Model
title: Gemma 4 E4B (non-reasoning)
creator: Google
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.028
output_speed_tps: 70.0
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.5, z: -1.02, r: 34.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.7, z: -0.77, r: 38.5, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.83, r: 37.5, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.75, r: 38.8, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.87, r: 63.1, estimated: false }  # 신뢰성
  multimodal: { s: 49.3, z: -1.1, r: 33.5, estimated: false }  # 멀티모달
  long_context: { s: 27.0, z: -0.75, r: 38.8, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.56, r: 41.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Gemma 4 E4B (non-reasoning)

Google · Open · Small · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $0.028/1M · 70.0 t/s · TTFT 0.82s · 128k ctx` · 가성비 250.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.7 | -1.02 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 55.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 38.5 | -0.77 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.5 | -0.83 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 38.8 | -0.75 | 실측 | [[tau2-bench]] 26.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 63.1 | +0.87 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 33.5 | -1.1 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 38.8 | -0.75 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 41.6 | -0.56 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
