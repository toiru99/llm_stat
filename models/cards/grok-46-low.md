---
type: Model
title: Grok 4.6 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.35
output_speed_tps: 66.0
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.1, z: 0.96, r: 64.4, estimated: false }  # 전문 지식
  reasoning: { s: 67.8, z: 1.0, r: 65.0, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 1.41, r: 71.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 72.1, z: 0.81, r: 62.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Grok 4.6 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 66.0 t/s · TTFT 7.12s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.4 | +0.96 | 실측 | [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 65.0 | +1.0 | 실측 | [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 71.2 | +1.41 | 실측 | [[gdpval]] 1418.0%×1.0, [[tau3-banking]] 38.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 62.2 | +0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
