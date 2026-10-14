---
type: Model
title: Granite 4.2 30B
creator: IBM
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.125
output_speed_tps: 76.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 26.5, z: -0.75, r: 38.7, estimated: false }  # 전문 지식
  reasoning: { s: 26.5, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.5, r: 57.5, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.86, r: 37.2, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.17, r: 82.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.1, z: 0.09, r: 51.3, estimated: false }  # 긴문맥
  instruction: { s: 45.2, z: -0.39, r: 44.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-14
timestamp: 2026-10-14T00:00:00Z
---

# Granite 4.2 30B

IBM · Open · Small · 컨텍스트 131k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.16 · 출력 $0.65 · 혼합 $0.125/1M · 76.0 t/s · TTFT 0.89s · 131k ctx` · 가성비 104.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.7 | -0.75 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 57.5 | +0.5 | 실측 | [[scicode]] 38.0%×1.0 |
| 에이전트 | 37.2 | -0.86 | 실측 | [[gdpval]] 4.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | 82.6 | +2.17 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.3 | +0.09 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 44.1 | -0.39 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
