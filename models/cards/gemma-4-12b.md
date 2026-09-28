---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.12
output_speed_tps: 114.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 36.2, z: -0.26, r: 46.2, estimated: false }  # 전문 지식
  reasoning: { s: 33.5, z: -0.1, r: 48.6, estimated: false }  # 추론
  coding: { s: 27.3, z: -0.27, r: 45.9, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.38, r: 44.3, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.25, r: 53.7, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.4, r: 70.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Gemma 4 12B

Google · Open · Unknown · 컨텍스트 256k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 114.0 t/s · TTFT 2.48s · 256k ctx` · 가성비 116.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.2 | -0.26 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 48.6 | -0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 45.9 | -0.27 | 실측 | [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 36.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 53.7 | +0.25 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 70.9 | +1.4 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
