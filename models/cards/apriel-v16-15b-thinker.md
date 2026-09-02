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
  knowledge: { s: 35.4, z: -0.24, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 30.5, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 46.9, z: 0.01, r: 50.1, estimated: false }  # 코딩
  agentic: { s: 45.5, z: 0.32, r: 54.9, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 61.4, z: 0.36, r: 55.3, estimated: true }  # 긴문맥
  instruction: { s: 80.3, z: 1.16, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.6-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Apriel-v1.6-15B-Thinker

ServiceNow · Open · Small(15B) · 컨텍스트 128k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.24 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 50.1 | +0.01 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 54.9 | +0.32 | 실측 | [[tau2-bench]] 69.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 37.0 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.3 | +0.36 | 추정 | (추정) |
| 지시 따르기 | 67.3 | +1.16 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
