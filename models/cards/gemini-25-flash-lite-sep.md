---
type: Model
title: Gemini 2.5 Flash-Lite (Sep)
creator: Google
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.8, z: -0.25, r: 46.2, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.32, r: 45.3, estimated: false }  # 추론
  coding: { s: 38.8, z: -0.34, r: 44.9, estimated: false }  # 코딩
  agentic: { s: 25.5, z: -0.42, r: 43.7, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.0, r: 49.9, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.19, r: 52.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.2 | -0.25 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.3 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 44.9 | -0.34 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 13.0%×0.5 |
| 에이전트 | 43.7 | -0.42 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 13.0%×1.0 |
| 신뢰성 | 39.9 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 49.9 | +-0.0 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 52.9 | +0.19 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
