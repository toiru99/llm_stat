---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.208
output_speed_tps: None
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.5, z: 0.63, r: 59.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.2, z: -0.1, r: 48.5, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 44.0, z: 0.33, r: 55.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 93.9, z: 1.24, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 85.5, z: 1.38, r: 70.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small · 컨텍스트 131k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.208/1M · None t/s · TTFT Nones · 131k ctx` · 가성비 28.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.4 | +0.63 | 실측 | [[gpqa-diamond]] 83.5%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 48.5 | -0.1 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 83.5%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 44.9%×1.0 |
| 에이전트 | 55.0 | +0.33 | 실측 | [[gdpval]] 792.0%×1.0, [[tau3-banking]] 23.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.5 | +1.24 | 실측 | [[aa-lcr]] 83.3%×1.0 |
| 지시 따르기 | 70.7 | +1.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
