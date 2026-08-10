---
type: Model
title: Apriel-v1.6-15B-Thinker
creator: ServiceNow
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 15
is_reasoning: true
radar:
  knowledge: { s: 35.6, z: -0.24, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 48.2, z: 0.04, r: 50.5, estimated: false }  # 코딩
  agentic: { s: 45.5, z: 0.39, r: 55.8, estimated: false }  # 에이전트
  trust: { s: 7.0, z: -0.89, r: 36.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.2, z: 0.33, r: 55.0, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.1, r: 66.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.6-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Apriel-v1.6-15B-Thinker

ServiceNow · Open · Small(15B) · 컨텍스트 128k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.24 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 50.5 | +0.04 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 55.8 | +0.39 | 실측 | [[tau2-bench]] 69.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 36.7 | -0.89 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.0 | +0.33 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
