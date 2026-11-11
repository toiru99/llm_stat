---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0475
output_speed_tps: None
context_window: 262000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.79, r: 61.8, estimated: false }  # 전문 지식
  reasoning: { s: 59.2, z: 0.79, r: 61.8, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.67, r: 60.1, estimated: false }  # 코딩
  agentic: { s: 52.0, z: 0.58, r: 58.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.3, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 77.7, z: 1.07, r: 66.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.075 · 출력 $0.22 · 혼합 $0.0475/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.8 | +0.79 | 실측 | [[gpqa-diamond]] 85.5%×0.4, [[humanitys-last-exam]] 23.7%×0.3 |
| 추론 | 61.8 | +0.79 | 실측 | [[gpqa-diamond]] 85.5%×1.0, [[humanitys-last-exam]] 23.7%×1.0 |
| 코딩 | 60.1 | +0.67 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 58.8 | +0.58 | 실측 | [[gdpval]] 957.0%×1.0, [[tau3-banking]] 27.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 66.1 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
