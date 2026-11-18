---
type: Model
title: GPT-5.5 Instant (May 2026)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.5, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 40.6, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 57.1, z: 0.42, r: 56.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.8, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 83.4, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (May 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-5.5 Instant (May 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[gpqa-diamond]] 84.64646464646461%×0.4, [[humanitys-last-exam]] 21.5940685820204%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[critpt]] 2.57142857142857%×1.0, [[gpqa-diamond]] 84.64646464646461%×1.0, [[humanitys-last-exam]] 21.5940685820204%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[terminal-bench]] 42.4242424242424%×0.5 |
| 에이전트 | 56.4 | +0.42 | 실측 | [[tau2-bench]] 49.4152046783626%×1.0, [[terminal-bench]] 42.4242424242424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 66.3333333333333%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 71.4965986394558%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
