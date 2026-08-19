---
type: Model
title: Devstral Small (May)
creator: Mistral
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 23.6
is_reasoning: false
radar:
  knowledge: { s: 23.9, z: -0.83, r: 37.6, estimated: false }  # 전문 지식
  reasoning: { s: 14.8, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 30.8, z: -0.72, r: 39.2, estimated: false }  # 코딩
  agentic: { s: 23.7, z: -0.51, r: 42.3, estimated: false }  # 에이전트
  trust: { s: 14.0, z: -0.58, r: 41.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.1, z: -0.43, r: 43.5, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Devstral Small (May)

Mistral · Open · Small(23.6B) · 컨텍스트 256k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.6 | -0.83 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.2 | -0.72 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 42.3 | -0.51 | 실측 | [[tau2-bench]] 38.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 41.2 | -0.58 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.5 | -0.43 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
