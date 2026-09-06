---
type: Model
title: Solar Open 100B
creator: Upstage
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: 102
is_reasoning: true
radar:
  knowledge: { s: 34.7, z: -0.3, r: 45.5, estimated: false }  # 전문 지식
  reasoning: { s: 26.9, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.02, r: 34.7, estimated: false }  # 코딩
  agentic: { s: 25.8, z: -0.45, r: 43.3, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.09, r: 48.6, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.5, r: 57.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Open 100B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Solar Open 100B

Upstage · Open · Medium(102B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.5 | -0.3 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 34.7 | -1.02 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 43.3 | -0.45 | 실측 | [[tau2-bench]] 48.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.6 | -0.09 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 57.6 | +0.5 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
