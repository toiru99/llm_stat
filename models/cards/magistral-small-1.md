---
type: Model
title: Magistral Small 1
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 40000
status: past
size_class: Small
params_b: 23.6
is_reasoning: true
radar:
  knowledge: { s: 33.8, z: -0.31, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.3, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 29.2, z: -0.71, r: 39.4, estimated: false }  # 코딩
  agentic: { s: 17.4, z: -0.72, r: 39.1, estimated: false }  # 에이전트
  trust: { s: 28.2, z: 0.03, r: 50.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.6, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.4, r: 29.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Magistral Small 1

Mistral · Open · Small(23.6B) · 컨텍스트 40k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 40k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 39.4 | -0.71 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 39.1 | -0.72 | 실측 | [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 50.4 | +0.03 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.6 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 29.1 | -1.4 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
