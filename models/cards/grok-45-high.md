---
type: Model
title: Grok 4.5 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.21
output_speed_tps: None
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.6, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 82.6, z: 1.67, r: 75.1, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.43, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 78.2, z: 1.5, r: 72.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 89.4, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 76.9, z: 1.02, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Grok 4.5 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.21/1M · None t/s · TTFT Nones · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 93.1%×0.4, [[humanitys-last-exam]] 42.7%×0.3 |
| 추론 | 75.1 | +1.67 | 실측 | [[gpqa-diamond]] 93.1%×1.0, [[humanitys-last-exam]] 42.7%×1.0 |
| 코딩 | 71.4 | +1.43 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 72.5 | +1.5 | 실측 | [[gdpval]] 1389.0%×1.0, [[tau3-banking]] 42.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 79.3%×1.0 |
| 지시 따르기 | 65.2 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
