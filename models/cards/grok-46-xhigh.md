---
type: Model
title: Grok 4.6 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 1.35
output_speed_tps: None
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.5, z: 1.62, r: 74.3, estimated: false }  # 전문 지식
  reasoning: { s: 69.3, z: 1.28, r: 69.2, estimated: false }  # 추론
  coding: { s: 75.8, z: 1.28, r: 69.2, estimated: false }  # 코딩
  agentic: { s: 86.5, z: 1.75, r: 76.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.3, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 79.3, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Grok 4.6 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · None t/s · TTFT Nones · 500k ctx` · 가성비 23.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.3 | +1.62 | 실측 | [[gpqa-diamond]] 93.5%×0.4, [[humanitys-last-exam]] 44.1%×0.3 |
| 추론 | 69.2 | +1.28 | 실측 | [[critpt]] 40.0%×1.0, [[gpqa-diamond]] 93.5%×1.0, [[humanitys-last-exam]] 44.1%×1.0 |
| 코딩 | 69.2 | +1.28 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 76.3 | +1.75 | 실측 | [[gdpval]] 1654.0%×1.0, [[tau3-banking]] 43.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
