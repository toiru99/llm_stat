---
type: Model
title: Granite 4.2 30B
creator: IBM
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.125
output_speed_tps: 72.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 26.5, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 26.5, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 16.0, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.26, r: 83.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.1, z: 0.13, r: 52.0, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.18, r: 47.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Granite 4.2 30B

IBM · Open · Small · 컨텍스트 131k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.16 · 출력 $0.65 · 혼합 $0.125/1M · 72.0 t/s · TTFT 0.94s · 131k ctx` · 가성비 120.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[gdpval]] 3.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | 83.9 | +2.26 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.0 | +0.13 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 47.3 | -0.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
