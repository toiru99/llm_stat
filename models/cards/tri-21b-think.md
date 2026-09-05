---
type: Model
title: Tri-21B-Think
creator: Trillion Labs
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 25.7, z: -0.73, r: 39.0, estimated: false }  # 전문 지식
  reasoning: { s: 22.3, z: -0.62, r: 40.8, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.07, r: 34.0, estimated: false }  # 코딩
  agentic: { s: 41.7, z: 0.16, r: 52.4, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.52, r: 42.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.0, z: -0.96, r: 35.6, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 55.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tri-21B-Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Tri-21B-Think

Trillion Labs · Open · Small(21B) · 컨텍스트 32k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.0 | -0.73 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 40.8 | -0.62 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 34.0 | -1.07 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 52.4 | +0.16 | 실측 | [[tau2-bench]] 81.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 42.2 | -0.52 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.6 | -0.96 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 55.0 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
