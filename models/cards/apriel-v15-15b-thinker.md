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
  knowledge: { s: 47.1, z: 0.01, r: 50.1, estimated: false }  # 전문 지식
  reasoning: { s: 43.1, z: -0.0, r: 49.9, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.72, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 16.1, z: -0.63, r: 40.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 56.8, z: -0.74, r: 38.9, estimated: false }  # 멀티모달
  long_context: { s: 24.0, z: -0.87, r: 37.0, estimated: false }  # 긴문맥
  instruction: { s: 69.7, z: 0.73, r: 60.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.5-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Apriel-v1.5-15B-Thinker

ServiceNow · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.1 | +0.01 | 실측 | [[gpqa-diamond]] 71.3%×0.4, [[humanitys-last-exam]] 12.1%×0.3 |
| 추론 | 49.9 | +-0.0 | 실측 | [[gpqa-diamond]] 71.3%×1.0, [[humanitys-last-exam]] 12.1%×1.0 |
| 코딩 | 39.1 | -0.72 | 실측 | [[terminal-bench]] 10.6%×0.5 |
| 에이전트 | 40.5 | -0.63 | 실측 | [[terminal-bench]] 10.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 38.9 | -0.74 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 37.0 | -0.87 | 실측 | [[aa-lcr]] 21.3%×1.0 |
| 지시 따르기 | 60.9 | +0.73 | 실측 | [[ifbench]] 61.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
