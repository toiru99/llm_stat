---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.195
output_speed_tps: 157.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.4, z: -1.24, r: 31.4, estimated: false }  # 전문 지식
  reasoning: { s: 14.1, z: -1.01, r: 34.8, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.16, r: 32.6, estimated: true }  # 코딩
  agentic: { s: 8.5, z: -1.13, r: 33.1, estimated: true }  # 에이전트
  trust: { s: 27.6, z: 0.09, r: 51.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 8.6, z: -1.28, r: 30.9, estimated: true }  # 긴문맥
  instruction: { s: 38.7, z: -0.62, r: 40.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 157.0 t/s · TTFT 0.73s · 32k ctx` · 가성비 30.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.4 | -1.24 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.8 | -1.01 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.6 | -1.16 | 추정 | (추정) |
| 에이전트 | 33.1 | -1.13 | 추정 | (추정) |
| 신뢰성 | 51.3 | +0.09 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.9 | -1.28 | 추정 | (추정) |
| 지시 따르기 | 40.7 | -0.62 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
