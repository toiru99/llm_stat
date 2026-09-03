---
type: Model
title: Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 34.1, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.63, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.39, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.14, r: 47.9, estimated: false }  # 멀티모달
  long_context: { s: 62.7, z: 0.38, r: 55.7, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 194.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.6 | -0.63 | 실측 | [[tau2-bench]] 30.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 55.9 | +0.39 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 47.9 | -0.14 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 55.7 | +0.38 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
