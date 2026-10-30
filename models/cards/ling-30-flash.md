---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0475
output_speed_tps: 241.0
context_window: 262000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 0.74, r: 61.1, estimated: false }  # 전문 지식
  reasoning: { s: 62.8, z: 0.77, r: 61.6, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.71, r: 60.7, estimated: false }  # 코딩
  agentic: { s: 52.1, z: 0.62, r: 59.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.07, r: 66.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 241.0 t/s · TTFT 2.77s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.1 | +0.74 | 실측 | [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 61.6 | +0.77 | 실측 | [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 60.7 | +0.71 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 59.2 | +0.62 | 실측 | [[gdpval]] 957.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
