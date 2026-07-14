---
type: Model
title: Qwen2.5 Turbo
creator: Alibaba
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.07
output_speed_tps: 104.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.6, z: -0.82, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 21.3, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 25.0, z: -0.89, r: 36.6, estimated: false }  # 코딩
  agentic: { s: 7.0, z: -1.14, r: 33.0, estimated: true }  # 에이전트
  trust: { s: 18.4, z: -0.44, r: 43.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.8, z: -0.87, r: 36.9, estimated: true }  # 긴문맥
  instruction: { s: 32.5, z: -0.81, r: 37.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# Qwen2.5 Turbo

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.07/1M · 104.0 t/s · TTFT 2.29s · 1M ctx` · 가성비 85.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.8 | -0.82 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.6 | -0.89 | 실측 | [[scicode]] 15.0%×1.0 |
| 에이전트 | 33.0 | -1.14 | 추정 | (추정) |
| 신뢰성 | 43.4 | -0.44 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.9 | -0.87 | 추정 | (추정) |
| 지시 따르기 | 37.8 | -0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
