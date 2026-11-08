---
type: Model
title: Grok 4.6 (high)
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
  knowledge: { s: 85.9, z: 1.62, r: 74.3, estimated: false }  # 전문 지식
  reasoning: { s: 83.9, z: 1.72, r: 75.9, estimated: false }  # 추론
  coding: { s: 82.7, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 93.0, z: 2.01, r: 80.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.5, z: 1.14, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.28, r: 69.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Grok 4.6 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · None t/s · TTFT Nones · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.3 | +1.62 | 실측 | [[gpqa-diamond]] 94.9%×0.4, [[humanitys-last-exam]] 42.9%×0.3 |
| 추론 | 75.9 | +1.72 | 실측 | [[gpqa-diamond]] 94.9%×1.0, [[humanitys-last-exam]] 42.9%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 56.5%×1.0 |
| 에이전트 | 80.1 | +2.01 | 실측 | [[gdpval]] 1626.0%×1.0, [[tau3-banking]] 50.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.14 | 실측 | [[aa-lcr]] 80.3%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
