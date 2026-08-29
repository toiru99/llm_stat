---
type: Model
title: Granite 4.2 30B
creator: IBM
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.125
output_speed_tps: 75.0
context_window: 131000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 27.3, z: -0.67, r: 40.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 61.7, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 24.3, z: -0.49, r: 42.7, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.38, r: 85.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.6, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 51.8, z: -0.02, r: 49.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Granite 4.2 30B

IBM · Open · Small(30B) · 컨텍스트 131k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.16 · 출력 $0.65 · 혼합 $0.125/1M · 75.0 t/s · TTFT 0.85s · 131k ctx` · 가성비 192.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.0 | -0.67 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[scicode]] 37.0%×1.0 |
| 에이전트 | 42.7 | -0.49 | 실측 | [[gdpval]] 14.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | 85.7 | +2.38 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 49.7 | -0.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
