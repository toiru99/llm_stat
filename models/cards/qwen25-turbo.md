---
type: Model
title: Qwen2.5 Turbo
creator: Alibaba
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.065
output_speed_tps: 102.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.1, z: -0.86, r: 37.0, estimated: false }  # 전문 지식
  reasoning: { s: 20.8, z: -0.69, r: 39.6, estimated: false }  # 추론
  coding: { s: 24.2, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 8.6, z: -1.12, r: 33.2, estimated: true }  # 에이전트
  trust: { s: 32.0, z: 0.35, r: 55.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.3, z: -0.97, r: 35.4, estimated: true }  # 긴문맥
  instruction: { s: 31.0, z: -0.92, r: 36.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen2.5 Turbo

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 102.0 t/s · TTFT 2.16s · 1M ctx` · 가성비 92.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.0 | -0.86 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.6 | -0.69 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[scicode]] 15.0%×1.0 |
| 에이전트 | 33.2 | -1.12 | 추정 | (추정) |
| 신뢰성 | 55.2 | +0.35 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.4 | -0.97 | 추정 | (추정) |
| 지시 따르기 | 36.2 | -0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
