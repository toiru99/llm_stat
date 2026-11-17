---
type: Model
title: Qwen3.8 Max
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.175
output_speed_tps: 58.05233111817353
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 69.8, z: 1.7, r: 75.6, estimated: false }  # 추론
  coding: { s: 76.2, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 94.4, z: 1.73, r: 75.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.7, z: 0.99, r: 64.9, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 78.7, z: 1.05, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.8 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 58.05233111817353 t/s · TTFT 4.308529159686149s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 92.7272727272727%×0.4, [[humanitys-last-exam]] 43.0491195551437%×0.3 |
| 추론 | 75.6 | +1.7 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 92.7272727272727%×1.0, [[humanitys-last-exam]] 43.0491195551437%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[scicode]] 53.2407407407407%×1.0 |
| 에이전트 | 75.9 | +1.73 | 실측 | [[gdpval]] 1611.46%×1.0, [[tau3-banking]] 51.340206185567006%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.9 | +0.99 | 실측 | [[mmmu-pro]] 82.3121387283237%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
