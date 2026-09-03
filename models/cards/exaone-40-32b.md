---
type: Model
title: EXAONE 4.0 32B
creator: LG AI Research
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Small
params_b: 32
is_reasoning: true
radar:
  knowledge: { s: 33.1, z: -0.37, r: 44.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 38.6, z: -0.36, r: 44.7, estimated: false }  # 코딩
  agentic: { s: 11.6, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.58, r: 41.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.1, z: -0.98, r: 35.3, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.0 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# EXAONE 4.0 32B

LG AI Research · Open · Small(32B) · 컨텍스트 131k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 44.7 | -0.36 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[tau2-bench]] 17.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 41.3 | -0.58 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.3 | -0.98 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
