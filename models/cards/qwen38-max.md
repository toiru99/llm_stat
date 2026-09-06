---
type: Model
title: Qwen3.8 Max
creator: Alibaba
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 1.175
output_speed_tps: 41.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.6, z: 1.09, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 77.1, z: 2.03, r: 80.4, estimated: false }  # 추론
  coding: { s: 79.6, z: 1.65, r: 74.8, estimated: false }  # 코딩
  agentic: { s: 94.3, z: 2.18, r: 82.6, estimated: false }  # 에이전트
  trust: { s: 57.7, z: 1.57, r: 73.5, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 73.6, z: 0.87, r: 63.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen3.8 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 41.0 t/s · TTFT 2.35s · 1M ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 80.4 | +2.03 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 74.8 | +1.65 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 82.6 | +2.18 | 실측 | [[gdpval]] 57.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | 73.5 | +1.57 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 63.1 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
