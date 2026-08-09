---
type: Model
title: Qwen3.8 Max
creator: Alibaba
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 1.175
output_speed_tps: 78.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.5, z: 1.18, r: 67.8, estimated: false }  # 전문 지식
  reasoning: { s: 79.7, z: 2.22, r: 83.3, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.7, r: 75.5, estimated: false }  # 코딩
  agentic: { s: 96.3, z: 2.41, r: 86.1, estimated: false }  # 에이전트
  trust: { s: 65.1, z: 1.78, r: 76.7, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.15, r: 67.3, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 76.2, z: 0.93, r: 63.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Qwen3.8 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 78.0 t/s · TTFT 2.62s · 1M ctx` · 가성비 49.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.8 | +1.18 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 83.3 | +2.22 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 75.5 | +1.7 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 86.1 | +2.41 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | 76.7 | +1.78 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 67.3 | +1.15 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 63.9 | +0.93 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
