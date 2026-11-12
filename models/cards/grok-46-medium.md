---
type: Model
title: Grok 4.6 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.35
output_speed_tps: None
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.56, r: 73.5, estimated: false }  # 전문 지식
  reasoning: { s: 76.4, z: 1.63, r: 74.5, estimated: false }  # 추론
  coding: { s: 80.6, z: 1.44, r: 71.6, estimated: false }  # 코딩
  agentic: { s: 86.6, z: 1.76, r: 76.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.3, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 84.4, z: 1.36, r: 70.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Grok 4.6 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · None t/s · TTFT Nones · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.5 | +1.56 | 실측 | [[gpqa-diamond]] 93.5%×0.4, [[humanitys-last-exam]] 42.1%×0.3 |
| 추론 | 74.5 | +1.63 | 실측 | [[gpqa-diamond]] 93.5%×1.0, [[humanitys-last-exam]] 42.1%×1.0 |
| 코딩 | 71.6 | +1.44 | 실측 | [[scicode]] 55.9%×1.0 |
| 에이전트 | 76.3 | +1.76 | 실측 | [[gdpval]] 1620.0%×1.0, [[tau3-banking]] 44.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 70.4 | +1.36 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
