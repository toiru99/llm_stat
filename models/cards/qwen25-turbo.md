---
type: Model
title: Qwen2.5 Turbo
creator: Alibaba
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.037
output_speed_tps: 109.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -0.91, r: 36.3, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.72, r: 39.1, estimated: false }  # 추론
  coding: { s: 10.8, z: -0.87, r: 36.9, estimated: true }  # 코딩
  agentic: { s: 14.1, z: -0.94, r: 35.9, estimated: true }  # 에이전트
  trust: { s: 36.1, z: 0.44, r: 56.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.1, z: -1.08, r: 33.9, estimated: true }  # 긴문맥
  instruction: { s: 22.6, z: -1.31, r: 30.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Qwen2.5 Turbo

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.037/1M · 109.0 t/s · TTFT 2.2s · 1M ctx` · 가성비 162.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.3 | -0.91 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.1 | -0.72 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.9 | -0.87 | 추정 | (추정) |
| 에이전트 | 35.9 | -0.94 | 추정 | (추정) |
| 신뢰성 | 56.6 | +0.44 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.9 | -1.08 | 추정 | (추정) |
| 지시 따르기 | 30.4 | -1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
