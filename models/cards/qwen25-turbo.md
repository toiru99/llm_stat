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
  knowledge: { s: 22.7, z: -0.9, r: 36.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.71, r: 39.3, estimated: false }  # 추론
  coding: { s: 10.8, z: -0.84, r: 37.4, estimated: true }  # 코딩
  agentic: { s: 14.1, z: -0.91, r: 36.4, estimated: true }  # 에이전트
  trust: { s: 36.1, z: 0.48, r: 57.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.1, z: -1.05, r: 34.3, estimated: true }  # 긴문맥
  instruction: { s: 22.6, z: -1.29, r: 30.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Qwen2.5 Turbo

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 107.0 t/s · TTFT 2.19s · 1M ctx` · 가성비 92.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.5 | -0.9 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.3 | -0.71 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 추정 | (추정) |
| 에이전트 | 36.4 | -0.91 | 추정 | (추정) |
| 신뢰성 | 57.3 | +0.48 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.3 | -1.05 | 추정 | (추정) |
| 지시 따르기 | 30.7 | -1.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
