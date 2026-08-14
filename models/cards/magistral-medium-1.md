---
type: Model
title: Magistral Medium 1
creator: Mistral
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 40000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.5, z: -0.22, r: 46.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.34, r: 44.8, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.42, r: 43.7, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.72, r: 39.3, estimated: false }  # 에이전트
  trust: { s: 45.3, z: 0.81, r: 62.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.52, r: 27.2, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.46, r: 28.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Medium 1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Magistral Medium 1

Mistral · Proprietary · Unknown · 컨텍스트 40k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 40k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.6 | -0.22 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 44.8 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 43.7 | -0.42 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 9.0%×0.5 |
| 에이전트 | 39.3 | -0.72 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 9.0%×1.0 |
| 신뢰성 | 62.2 | +0.81 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.2 | -1.52 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 28.1 | -1.46 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
