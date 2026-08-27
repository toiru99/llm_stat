---
type: Model
title: Granite 4.2 8B
creator: IBM
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.0475
output_speed_tps: 137.0
context_window: 131000
status: current
size_class: Small
params_b: 8
is_reasoning: true
radar:
  knowledge: { s: 26.8, z: -0.7, r: 39.6, estimated: false }  # 전문 지식
  reasoning: { s: 26.3, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.05, r: 50.7, estimated: false }  # 코딩
  agentic: { s: 15.3, z: -0.85, r: 37.3, estimated: false }  # 에이전트
  trust: { s: 76.7, z: 2.01, r: 80.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.8, z: 0.03, r: 50.4, estimated: false }  # 긴문맥
  instruction: { s: 38.4, z: -0.65, r: 40.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Granite 4.2 8B

IBM · Open · Small(8B) · 컨텍스트 131k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.25 · 혼합 $0.0475/1M · 137.0 t/s · TTFT 0.63s · 131k ctx` · 가성비 421.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.6 | -0.7 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 50.7 | +0.05 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 37.3 | -0.85 | 실측 | [[gdpval]] 10.0%×1.0, [[tau3-banking]] 8.0%×1.0 |
| 신뢰성 | 80.1 | +2.01 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.4 | +0.03 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 40.2 | -0.65 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
