---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 35.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 51.5, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 45.5, z: 0.52, r: 57.9, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.08, r: 66.2, estimated: false }  # 코딩
  agentic: { s: 40.7, z: 0.19, r: 52.8, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.35, r: 44.8, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.6, r: 59.0, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.42, r: 71.4, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small(30B) · 컨텍스트 256k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 57.9 | +0.52 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 66.2 | +1.08 | 실측 | [[scicode]] 44.0%×1.0 |
| 에이전트 | 52.8 | +0.19 | 실측 | [[gdpval]] 23.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 59.0 | +0.6 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 71.4 | +1.42 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
