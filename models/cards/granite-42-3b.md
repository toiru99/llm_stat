---
type: Model
title: Granite 4.2 3B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Tiny
params_b: 3
is_reasoning: true
radar:
  knowledge: { s: 33.7, z: -0.64, r: 40.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 30.3, z: -0.36, r: 44.5, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.4, z: -0.93, r: 36.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Granite 4.2 3B

IBM · Open · Tiny(3B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.5 | -0.64 | 실측 | [[gpqa-diamond]] 55.8586%×0.4, [[humanitys-last-exam]] 6.62651%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 55.8586%×1.0, [[humanitys-last-exam]] 6.62651%×1.0 |
| 코딩 | 44.5 | -0.36 | 실측 | [[scicode]] 25.3472%×1.0 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[gdpval]] 208.93 Elo×1.0, [[tau3-banking]] 5.56701%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.1 | -0.93 | 실측 | [[aa-lcr]] 24.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
