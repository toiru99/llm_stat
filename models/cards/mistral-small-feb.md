---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: 0.195
output_speed_tps: 146.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.1, z: -1.19, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.8, z: -0.99, r: 35.1, estimated: false }  # 추론
  coding: { s: 21.7, z: -1.06, r: 34.1, estimated: false }  # 코딩
  agentic: { s: 10.6, z: -1.01, r: 34.9, estimated: true }  # 에이전트
  trust: { s: 34.4, z: 0.28, r: 54.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.8, z: -1.41, r: 28.8, estimated: true }  # 긴문맥
  instruction: { s: 29.4, z: -0.98, r: 35.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 146.0 t/s · TTFT 0.84s · 32k ctx` · 가성비 20.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.19 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.1 | -0.99 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.1 | -1.06 | 실측 | [[scicode]] 13.0%×1.0 |
| 에이전트 | 34.9 | -1.01 | 추정 | (추정) |
| 신뢰성 | 54.2 | +0.28 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.8 | -1.41 | 추정 | (추정) |
| 지시 따르기 | 35.3 | -0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
