---
type: Model
title: Apriel-v1.5-15B-Thinker
creator: ServiceNow
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.1, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.8, z: -0.28, r: 45.7, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.81, r: 37.8, estimated: false }  # 코딩
  agentic: { s: 42.6, z: -0.08, r: 48.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 56.7, z: -0.75, r: 38.8, estimated: false }  # 멀티모달
  long_context: { s: 24.1, z: -0.88, r: 36.8, estimated: false }  # 긴문맥
  instruction: { s: 69.6, z: 0.66, r: 59.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.5-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Apriel-v1.5-15B-Thinker

ServiceNow · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[gpqa-diamond]] 71.3131313131313%×0.4, [[humanitys-last-exam]] 12.1408711770158%×0.3 |
| 추론 | 45.7 | -0.28 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 71.3131313131313%×1.0, [[humanitys-last-exam]] 12.1408711770158%×1.0 |
| 코딩 | 37.8 | -0.81 | 실측 | [[terminal-bench]] 10.6060606060606%×0.5 |
| 에이전트 | 48.8 | -0.08 | 실측 | [[tau2-bench]] 68.4210526315789%×1.0, [[terminal-bench]] 10.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 38.8 | -0.75 | 실측 | [[mmmu-pro]] 57.05202312138729%×1.0 |
| 긴문맥 | 36.8 | -0.88 | 실측 | [[aa-lcr]] 21.3333333333333%×1.0 |
| 지시 따르기 | 59.9 | +0.66 | 실측 | [[ifbench]] 61.7006802721088%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
