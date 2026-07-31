---
type: Model
title: Devstral Medium
creator: Mistral
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.6, z: -0.55, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.43, r: 43.6, estimated: false }  # 코딩
  agentic: { s: 16.9, z: -0.76, r: 38.6, estimated: false }  # 에이전트
  trust: { s: 41.4, z: 0.63, r: 59.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.2, z: -0.33, r: 45.0, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.15, r: 32.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Medium
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Devstral Medium

Mistral · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.55 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.6 | -0.43 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 9.0%×0.5 |
| 에이전트 | 38.6 | -0.76 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 9.0%×1.0 |
| 신뢰성 | 59.4 | +0.63 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.0 | -0.33 | 실측 | [[aa-lcr]] 29.0%×1.0 |
| 지시 따르기 | 32.8 | -1.15 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
