---
type: Model
title: Apriel-v1.6-15B-Thinker
creator: ServiceNow
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.0
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.19, r: 47.1, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 48.2, z: 0.09, r: 51.4, estimated: false }  # 코딩
  agentic: { s: 45.5, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: 9.4, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.8, z: 0.52, r: 57.8, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.15, r: 67.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.6-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Apriel-v1.6-15B-Thinker

ServiceNow · Open · Unknown · 컨텍스트 128k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.1 | -0.19 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 51.4 | +0.09 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[tau2-bench]] 69.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.8 | +0.52 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
