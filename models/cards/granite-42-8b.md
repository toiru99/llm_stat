---
type: Model
title: Granite 4.2 8B
creator: IBM
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.0475
output_speed_tps: None
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.2, z: -0.32, r: 45.2, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 40.5, z: 0.09, r: 51.4, estimated: false }  # 코딩
  agentic: { s: 20.6, z: -0.48, r: 42.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.7, z: -0.07, r: 49.0, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.52, r: 42.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Granite 4.2 8B

IBM · Open · Small · 컨텍스트 131k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.06 · 출력 $0.25 · 혼합 $0.0475/1M · None t/s · TTFT Nones · 131k ctx` · 가성비 105.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.2 | -0.32 | 실측 | [[gpqa-diamond]] 63.1%×0.4, [[humanitys-last-exam]] 9.7%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.1%×1.0, [[humanitys-last-exam]] 9.7%×1.0 |
| 코딩 | 51.4 | +0.09 | 실측 | [[scicode]] 31.5%×1.0 |
| 에이전트 | 42.8 | -0.48 | 실측 | [[gdpval]] 499.0%×1.0, [[tau3-banking]] 7.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.0 | -0.07 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 42.3 | -0.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
