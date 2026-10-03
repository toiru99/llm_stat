---
type: Model
title: Grok 4.6 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.35
output_speed_tps: 77.0
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.8, z: 1.62, r: 74.4, estimated: false }  # 전문 지식
  reasoning: { s: 74.0, z: 1.7, r: 75.5, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.55, r: 73.2, estimated: false }  # 코딩
  agentic: { s: 91.0, z: 1.99, r: 79.9, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.83, r: 77.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 74.4, z: 0.84, r: 62.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Grok 4.6 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 77.0 t/s · TTFT 29.97s · 500k ctx` · 가성비 32.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.4 | +1.62 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 75.5 | +1.7 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 73.2 | +1.55 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 79.9 | +1.99 | 실측 | [[gdpval]] 55.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | 77.5 | +1.83 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
