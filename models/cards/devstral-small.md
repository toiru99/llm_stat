---
type: Model
title: Devstral Small
creator: Mistral
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 23.4, z: -0.85, r: 37.3, estimated: false }  # 전문 지식
  reasoning: { s: 14.2, z: -1.02, r: 34.7, estimated: false }  # 추론
  coding: { s: 29.7, z: -0.73, r: 39.0, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.68, r: 39.8, estimated: false }  # 에이전트
  trust: { s: 25.3, z: -0.16, r: 47.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.4, z: -0.81, r: 37.8, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.86, r: 37.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Devstral Small

Mistral · Open · Small(24B) · 컨텍스트 256k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.7 | -1.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.0 | -0.73 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 39.8 | -0.68 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 47.6 | -0.16 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.8 | -0.81 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 37.1 | -0.86 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
