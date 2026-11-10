---
type: Model
title: Qwen3.8 Max
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.175
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 76.5, z: 1.63, r: 74.5, estimated: false }  # 추론
  coding: { s: 76.2, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 93.2, z: 1.98, r: 79.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.5, z: 0.96, r: 64.5, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 80.9, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Qwen3.8 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 92.7%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 74.5 | +1.63 | 실측 | [[gpqa-diamond]] 92.7%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 53.2%×1.0 |
| 에이전트 | 79.7 | +1.98 | 실측 | [[gdpval]] 1611.0%×1.0, [[tau3-banking]] 51.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.5 | +0.96 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
