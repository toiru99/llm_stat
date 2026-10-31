---
type: Model
title: Granite 4.2 30B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.0, z: -0.28, r: 45.8, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 29.3, z: -0.17, r: 47.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.1, z: 0.08, r: 51.3, estimated: false }  # 긴문맥
  instruction: { s: 55.7, z: 0.12, r: 51.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Granite 4.2 30B

IBM · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.8 | -0.28 | 실측 | [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 47.5 | -0.17 | 실측 | [[gdpval]] 583.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.3 | +0.08 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 51.9 | +0.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
