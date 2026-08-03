---
type: Model
title: Olmo 3.1 32B Instruct
creator: Allen Institute for AI
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65500
status: current
size_class: Small
params_b: 32.2
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -0.84, r: 37.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.0, z: -0.73, r: 39.1, estimated: false }  # 추론
  coding: { s: 18.9, z: -1.17, r: 32.4, estimated: false }  # 코딩
  agentic: { s: 10.6, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: 33.3, z: 0.25, r: 53.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Olmo 3.1 32B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Olmo 3.1 32B Instruct

Allen Institute for AI · Open · Small(32.2B) · 컨텍스트 65k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.1 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.4 | -1.17 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 53.7 | +0.25 | 실측 | [[aa-omniscience]] 30.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 40.7 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
