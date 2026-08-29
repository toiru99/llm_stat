---
type: Model
title: Gemini 2.0 Flash
creator: Google
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.2, z: -0.22, r: 46.6, estimated: false }  # 전문 지식
  reasoning: { s: 22.2, z: -0.62, r: 40.7, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.37, r: 44.4, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -0.73, r: 39.0, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.55, r: 41.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.6, z: -0.33, r: 45.0, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.54, r: 41.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Gemini 2.0 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.6 | -0.22 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.7 | -0.62 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.4 | -0.37 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 39.0 | -0.73 | 실측 | [[tau2-bench]] 30.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 41.7 | -0.55 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.0 | -0.33 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 41.9 | -0.54 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
