---
type: Model
title: Ring-flash-2.0
creator: InclusionAI
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.183
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: 103
is_reasoning: true
radar:
  knowledge: { s: 35.1, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.9, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 22.3, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 6.1, z: -1.22, r: 31.7, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.65, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-flash-2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Ring-flash-2.0

InclusionAI · Open · Medium(103B) · 컨텍스트 128k · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.14 · 출력 $0.57 · 혼합 $0.183/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 43.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 31.7 | -1.22 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.3 | -0.65 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
