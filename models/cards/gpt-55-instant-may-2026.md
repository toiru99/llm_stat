---
type: Model
title: GPT-5.5 Instant (May 2026)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.6, z: 1.44, r: 71.6, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.59, r: 58.8, estimated: false }  # 추론
  coding: { s: 76.8, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 56.6, z: 0.79, r: 61.8, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.6, r: 58.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.7, z: 0.73, r: 61.0, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.25, r: 68.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (May 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# GPT-5.5 Instant (May 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $None/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.6 | +1.44 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 58.8 | +0.59 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 61.8 | +0.79 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 58.9 | +0.6 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.0 | +0.73 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 68.7 | +1.25 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
