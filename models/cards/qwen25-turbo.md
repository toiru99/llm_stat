---
type: Model
title: Qwen2.5 Turbo
creator: Alibaba
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.065
output_speed_tps: 107.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.6, z: -0.84, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 21.3, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 25.0, z: -0.92, r: 36.2, estimated: false }  # 코딩
  agentic: { s: 6.9, z: -1.15, r: 32.8, estimated: true }  # 에이전트
  trust: { s: 20.0, z: -0.39, r: 44.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.6, z: -0.83, r: 37.6, estimated: true }  # 긴문맥
  instruction: { s: 31.8, z: -0.88, r: 36.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Qwen2.5 Turbo

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 107.0 t/s · TTFT 2.15s · 1M ctx` · 가성비 92.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.84 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.2 | -0.92 | 실측 | [[scicode]] 15.0%×1.0 |
| 에이전트 | 32.8 | -1.15 | 추정 | (추정) |
| 신뢰성 | 44.1 | -0.39 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.6 | -0.83 | 추정 | (추정) |
| 지시 따르기 | 36.8 | -0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
