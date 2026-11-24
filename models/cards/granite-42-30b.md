---
type: Model
title: Granite 4.2 30B
creator: IBM
license: Open
intelligence_index: 5.53591398205629
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 42.0, z: -0.23, r: 46.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.9, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 50.9, z: 0.33, r: 55.0, estimated: false }  # 코딩
  agentic: { s: 35.6, z: -0.4, r: 43.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.3, z: -0.08, r: 48.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Granite 4.2 30B

IBM · Open · Small(30B) · 컨텍스트 131k · 종합지능 **5.53591398205629**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.5 | -0.23 | 실측 | [[gpqa-diamond]] 64.4444%×0.4, [[humanitys-last-exam]] 11.1677%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 64.4444%×1.0, [[humanitys-last-exam]] 11.1677%×1.0 |
| 코딩 | 55.0 | +0.33 | 실측 | [[scicode]] 37.8472%×1.0 |
| 에이전트 | 43.9 | -0.4 | 실측 | [[gdpval]] 582.86 Elo×1.0, [[tau3-banking]] 14.433%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.9 | -0.08 | 실측 | [[aa-lcr]] 49%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
