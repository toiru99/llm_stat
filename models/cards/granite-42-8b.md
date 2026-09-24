---
type: Model
title: Granite 4.2 8B
creator: IBM
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.0475
output_speed_tps: 78.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 26.8, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 40.0, z: 0.17, r: 52.6, estimated: false }  # 코딩
  agentic: { s: 7.8, z: -1.15, r: 32.8, estimated: false }  # 에이전트
  trust: { s: 68.0, z: 1.98, r: 79.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: 0.0, r: 50.0, estimated: false }  # 긴문맥
  instruction: { s: 38.9, z: -0.6, r: 40.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Granite 4.2 8B

IBM · Open · Small · 컨텍스트 131k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.25 · 혼합 $0.0475/1M · 78.0 t/s · TTFT 0.82s · 131k ctx` · 가성비 231.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 52.6 | +0.17 | 실측 | [[scicode]] 31.0%×1.0 |
| 에이전트 | 32.8 | -1.15 | 실측 | [[gdpval]] 0.0%×1.0, [[tau3-banking]] 8.0%×1.0 |
| 신뢰성 | 79.7 | +1.98 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.0 | +0.0 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 40.9 | -0.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
