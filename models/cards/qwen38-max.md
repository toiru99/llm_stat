---
type: Model
title: Qwen3.8 Max
creator: Alibaba
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 1.175
output_speed_tps: 47.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.2, z: 1.14, r: 67.1, estimated: false }  # 전문 지식
  reasoning: { s: 79.3, z: 2.15, r: 82.3, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.64, r: 74.7, estimated: false }  # 코딩
  agentic: { s: 96.3, z: 2.34, r: 85.1, estimated: false }  # 에이전트
  trust: { s: 65.1, z: 1.69, r: 75.4, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.12, r: 66.9, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 0.91, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Qwen3.8 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 47.0 t/s · TTFT 2.6s · 1M ctx` · 가성비 49.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.1 | +1.14 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 82.3 | +2.15 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 74.7 | +1.64 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 85.1 | +2.34 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | 75.4 | +1.69 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 66.9 | +1.12 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 63.7 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
