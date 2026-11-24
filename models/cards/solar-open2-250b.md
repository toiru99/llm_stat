---
type: Model
title: Solar Open2 250B
creator: Upstage
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1048576
status: current
size_class: Large
params_b: 250
is_reasoning: true
radar:
  knowledge: { s: 66.2, z: 0.95, r: 64.2, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.59, r: 58.9, estimated: false }  # 추론
  coding: { s: 67.6, z: 0.9, r: 63.4, estimated: false }  # 코딩
  agentic: { s: 51.4, z: 0.15, r: 52.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Open2 250B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Solar Open2 250B

Upstage · Open · Large(250B) · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.2 | +0.95 | 실측 | [[gpqa-diamond]] 85.6566%×0.4, [[humanitys-last-exam]] 28.5449%×0.3 |
| 추론 | 58.9 | +0.59 | 실측 | [[critpt]] 5.71429%×1.0, [[gpqa-diamond]] 85.6566%×1.0, [[humanitys-last-exam]] 28.5449%×1.0 |
| 코딩 | 63.4 | +0.9 | 실측 | [[scicode]] 48.0324%×1.0 |
| 에이전트 | 52.3 | +0.15 | 실측 | [[gdpval]] 978.55 Elo×1.0, [[tau3-banking]] 21.6495%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 71.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
