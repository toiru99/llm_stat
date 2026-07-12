---
type: Model
title: Gemini 2.0 Flash
creator: Google
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.11
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.5, z: -0.09, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 23.2, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.31, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 18.2, z: -0.7, r: 39.5, estimated: false }  # 에이전트
  trust: { s: 14.1, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.8, z: -0.34, r: 44.9, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.53, r: 42.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# Gemini 2.0 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.11/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 109.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 45.4 | -0.31 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 39.5 | -0.7 | 실측 | [[tau2-bench]] 30.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.9 | -0.34 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 42.0 | -0.53 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
