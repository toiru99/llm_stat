---
type: Model
title: Mistral Medium
creator: Mistral
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: 125.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.7, z: -1.06, r: 34.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.8, z: -0.89, r: 36.7, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.11, r: 33.3, estimated: false }  # 코딩
  agentic: { s: 10.7, z: -1.0, r: 35.1, estimated: true }  # 에이전트
  trust: { s: 21.7, z: -0.29, r: 45.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.4, z: -1.05, r: 34.2, estimated: true }  # 긴문맥
  instruction: { s: 28.6, z: -0.99, r: 35.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Mistral Medium

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $2.75 · 출력 $8.1 · 혼합 $None/1M · 125.0 t/s · TTFT 1.99s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.1 | -1.06 | 실측 | [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 36.7 | -0.89 | 실측 | [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 33.3 | -1.11 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 35.1 | -1.0 | 추정 | (추정) |
| 신뢰성 | 45.7 | -0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.2 | -1.05 | 추정 | (추정) |
| 지시 따르기 | 35.1 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
