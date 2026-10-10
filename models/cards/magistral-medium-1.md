---
type: Model
title: Magistral Medium 1
creator: Mistral
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 40000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.1, z: -0.3, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.5, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 13.6, z: -0.79, r: 38.1, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.79, r: 38.2, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.62, r: 59.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.57, r: 26.4, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.51, r: 27.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Medium 1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Magistral Medium 1

Mistral · Proprietary · Unknown · 컨텍스트 40k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 40k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.3 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 38.1 | -0.79 | 실측 | [[terminal-bench]] 9.0%×0.5 |
| 에이전트 | 38.2 | -0.79 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 9.0%×1.0 |
| 신뢰성 | 59.3 | +0.62 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.4 | -1.57 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.4 | -1.51 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
