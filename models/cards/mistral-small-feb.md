---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: 0.195
output_speed_tps: 145.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.0, z: -1.19, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.7, z: -1.0, r: 35.1, estimated: false }  # 추론
  coding: { s: 21.7, z: -1.06, r: 34.0, estimated: false }  # 코딩
  agentic: { s: 11.9, z: -0.95, r: 35.8, estimated: true }  # 에이전트
  trust: { s: 34.2, z: 0.36, r: 55.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 8.4, z: -1.24, r: 31.4, estimated: true }  # 긴문맥
  instruction: { s: 24.7, z: -1.19, r: 32.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 145.0 t/s · TTFT 0.97s · 32k ctx` · 가성비 15.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.19 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.1 | -1.0 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.0 | -1.06 | 실측 | [[scicode]] 13.0%×1.0 |
| 에이전트 | 35.8 | -0.95 | 추정 | (추정) |
| 신뢰성 | 55.5 | +0.36 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.4 | -1.24 | 추정 | (추정) |
| 지시 따르기 | 32.1 | -1.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
