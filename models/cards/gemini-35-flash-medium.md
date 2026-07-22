---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: None
output_speed_tps: 190.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.2, z: 2.14, r: 82.1, estimated: false }  # 전문 지식
  reasoning: { s: 69.0, z: 1.84, r: 77.6, estimated: false }  # 추론
  coding: { s: 78.6, z: 1.35, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 78.0, z: 1.61, r: 74.2, estimated: false }  # 에이전트
  trust: { s: 45.9, z: 0.85, r: 62.7, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.34, r: 70.1, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.32, r: 69.8, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.49, r: 72.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $None/1M · 190.0 t/s · TTFT 20.7s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.1 | +2.14 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 77.6 | +1.84 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 70.2 | +1.35 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 74.2 | +1.61 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 62.7 | +0.85 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 70.1 | +1.34 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 69.8 | +1.32 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 72.3 | +1.49 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
