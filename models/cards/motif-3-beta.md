---
type: Model
title: Motif 3 (Beta)
creator: Motif Technologies
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.9, z: 1.3, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 71.4, z: 1.38, r: 70.7, estimated: false }  # 추론
  coding: { s: 65.4, z: 0.93, r: 64.0, estimated: true }  # 코딩
  agentic: { s: 59.4, z: 0.83, r: 62.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.93, r: 64.0, estimated: false }  # 긴문맥
  instruction: { s: 87.9, z: 1.51, r: 72.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3 (Beta)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Motif 3 (Beta)

Motif Technologies · Proprietary · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.3 | 실측 | [[gpqa-diamond]] 86.9%×0.4, [[humanitys-last-exam]] 40.4%×0.3 |
| 추론 | 70.7 | +1.38 | 실측 | [[gpqa-diamond]] 86.9%×1.0, [[humanitys-last-exam]] 40.4%×1.0 |
| 코딩 | 64.0 | +0.93 | 추정 | (추정) |
| 에이전트 | 62.5 | +0.83 | 실측 | [[gdpval]] 1109.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.0 | +0.93 | 실측 | [[aa-lcr]] 74.7%×1.0 |
| 지시 따르기 | 72.6 | +1.51 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
