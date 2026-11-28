---
type: Model
title: Qwen3.8 Max
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.175
output_speed_tps: 57.3072724760838
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.58, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 69.8, z: 1.72, r: 75.8, estimated: false }  # 추론
  coding: { s: 76.2, z: 1.18, r: 67.8, estimated: false }  # 코딩
  agentic: { s: 94.4, z: 1.66, r: 74.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.97, r: 64.6, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3.8 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 57.3072724760838 t/s · TTFT 5.72532734827767s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.58 | 실측 | [[gpqa-diamond]] 92.7273%×0.4, [[humanitys-last-exam]] 43.0491%×0.3 |
| 추론 | 75.8 | +1.72 | 실측 | [[critpt]] 20%×1.0, [[gpqa-diamond]] 92.7273%×1.0, [[humanitys-last-exam]] 43.0491%×1.0 |
| 코딩 | 67.8 | +1.18 | 실측 | [[scicode]] 53.2407%×1.0 |
| 에이전트 | 74.9 | +1.66 | 실측 | [[gdpval]] 1611.83 Elo×1.0, [[tau3-banking]] 51.3402%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.6 | +0.97 | 실측 | [[mmmu-pro]] 82.3121%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
