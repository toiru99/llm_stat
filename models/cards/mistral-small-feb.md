---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.195
output_speed_tps: 150.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.5, z: -1.22, r: 31.6, estimated: false }  # 전문 지식
  reasoning: { s: 14.2, z: -1.0, r: 35.0, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.1, r: 33.5, estimated: true }  # 코딩
  agentic: { s: 10.4, z: -1.04, r: 34.4, estimated: true }  # 에이전트
  trust: { s: 19.0, z: -0.27, r: 45.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.3, z: -1.19, r: 32.2, estimated: true }  # 긴문맥
  instruction: { s: 27.3, z: -1.06, r: 34.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-08
timestamp: 2026-09-08T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 150.0 t/s · TTFT 0.7s · 32k ctx` · 가성비 30.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.6 | -1.22 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.0 | -1.0 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.5 | -1.1 | 추정 | (추정) |
| 에이전트 | 34.4 | -1.04 | 추정 | (추정) |
| 신뢰성 | 45.9 | -0.27 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.2 | -1.19 | 추정 | (추정) |
| 지시 따르기 | 34.1 | -1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
