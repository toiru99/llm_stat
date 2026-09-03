---
type: Model
title: Granite 4.2 30B
creator: IBM
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.125
output_speed_tps: 76.0
context_window: 131000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 26.8, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.9, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: 59.7, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 23.8, z: -0.53, r: 42.0, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.34, r: 85.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.6, z: 0.2, r: 52.9, estimated: false }  # 긴문맥
  instruction: { s: 51.8, z: -0.05, r: 49.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Granite 4.2 30B

IBM · Open · Small(30B) · 컨텍스트 131k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.16 · 출력 $0.65 · 혼합 $0.125/1M · 76.0 t/s · TTFT 0.81s · 131k ctx` · 가성비 192.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 44.2 | -0.39 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[scicode]] 37.0%×1.0 |
| 에이전트 | 42.0 | -0.53 | 실측 | [[gdpval]] 14.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | 85.1 | +2.34 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.9 | +0.2 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 49.3 | -0.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
