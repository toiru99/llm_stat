---
type: Model
title: Devstral Small 2
creator: Mistral
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -0.74, r: 38.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.8, z: -0.84, r: 37.3, estimated: false }  # 추론
  coding: { s: 36.4, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 18.0, z: -0.78, r: 38.3, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.7, r: 39.6, estimated: false }  # 신뢰성
  multimodal: { s: 41.1, z: -1.49, r: 27.6, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.61, r: 40.9, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.12, r: 33.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Devstral Small 2

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.9 | -0.74 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.3 | -0.84 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[scicode]] 32.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 38.3 | -0.78 | 실측 | [[gdpval]] 1.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 39.6 | -0.7 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 27.6 | -1.49 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 40.9 | -0.61 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 33.1 | -1.12 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
