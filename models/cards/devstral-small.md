---
type: Model
title: Devstral Small
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
  knowledge: { s: 22.5, z: -0.93, r: 36.1, estimated: false }  # 전문 지식
  reasoning: { s: 13.7, z: -1.04, r: 34.4, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.94, r: 36.0, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.77, r: 38.5, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.23, r: 46.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.3, z: -0.92, r: 36.3, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.91, r: 36.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Devstral Small

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.1 | -0.93 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.4 | -1.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.0 | -0.94 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 38.5 | -0.77 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 46.6 | -0.23 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.3 | -0.92 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 36.3 | -0.91 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
