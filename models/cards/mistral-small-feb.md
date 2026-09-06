---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 1.0
price_blended_usd_1m: 0.195
output_speed_tps: 151.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.5, z: -1.22, r: 31.6, estimated: false }  # 전문 지식
  reasoning: { s: 14.2, z: -1.0, r: 35.0, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.07, r: 33.9, estimated: true }  # 코딩
  agentic: { s: 10.9, z: -1.02, r: 34.8, estimated: true }  # 에이전트
  trust: { s: 11.3, z: -0.62, r: 40.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 5.4, z: -1.34, r: 29.8, estimated: true }  # 긴문맥
  instruction: { s: 31.0, z: -0.91, r: 36.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 151.0 t/s · TTFT 0.7s · 32k ctx` · 가성비 5.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.6 | -1.22 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.0 | -1.0 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.9 | -1.07 | 추정 | (추정) |
| 에이전트 | 34.8 | -1.02 | 추정 | (추정) |
| 신뢰성 | 40.7 | -0.62 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.8 | -1.34 | 추정 | (추정) |
| 지시 따르기 | 36.4 | -0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
