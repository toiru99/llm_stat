---
type: Model
title: Grok 4.6 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.35
output_speed_tps: 72.1526722387432
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 67.5, z: 1.59, r: 73.9, estimated: false }  # 추론
  coding: { s: 80.6, z: 1.39, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 87.7, z: 1.5, r: 72.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 79.1, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Grok 4.6 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 72.1526722387432 t/s · TTFT 17.89278242884716s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 93.53535353535351%×0.4, [[humanitys-last-exam]] 42.122335495829496%×0.3 |
| 추론 | 73.9 | +1.59 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[gpqa-diamond]] 93.53535353535351%×1.0, [[humanitys-last-exam]] 42.122335495829496%×1.0 |
| 코딩 | 70.8 | +1.39 | 실측 | [[scicode]] 55.9027777777778%×1.0 |
| 에이전트 | 72.4 | +1.5 | 실측 | [[gdpval]] 1620.59%×1.0, [[tau3-banking]] 44.3298969072165%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
