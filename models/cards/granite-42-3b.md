---
type: Model
title: Granite 4.2 3B
creator: IBM
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.0232
output_speed_tps: 220.0
context_window: 131000
status: current
size_class: Tiny
params_b: 3
is_reasoning: true
radar:
  knowledge: { s: 22.8, z: -0.89, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.64, r: 40.3, estimated: false }  # 추론
  coding: { s: 41.7, z: -0.25, r: 46.3, estimated: false }  # 코딩
  agentic: { s: 5.9, z: -1.21, r: 31.8, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.37, r: 85.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.63, r: 40.6, estimated: false }  # 긴문맥
  instruction: { s: 34.9, z: -0.73, r: 39.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Granite 4.2 3B

IBM · Open · Tiny(3B) · 컨텍스트 131k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.03 · 출력 $0.12 · 혼합 $0.0232/1M · 220.0 t/s · TTFT 0.45s · 131k ctx` · 가성비 603.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 40.3 | -0.64 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 46.3 | -0.25 | 실측 | [[scicode]] 25.0%×1.0 |
| 에이전트 | 31.8 | -1.21 | 실측 | [[gdpval]] 0.0%×1.0, [[tau3-banking]] 6.0%×1.0 |
| 신뢰성 | 85.5 | +2.37 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.6 | -0.63 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 39.0 | -0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
