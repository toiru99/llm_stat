---
type: Model
title: Gemini 2.5 Flash-Lite (Sep)
creator: Google
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: 0.07
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.8, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.28, r: 45.7, estimated: false }  # 추론
  coding: { s: 38.8, z: -0.31, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 25.5, z: -0.41, r: 43.8, estimated: false }  # 에이전트
  trust: { s: 14.1, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: 72.5, z: 0.05, r: 50.7, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.22, r: 53.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.07/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 214.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.7 | -0.28 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 45.4 | -0.31 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 13.0%×0.5 |
| 에이전트 | 43.8 | -0.41 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 13.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 50.7 | +0.05 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 53.3 | +0.22 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
