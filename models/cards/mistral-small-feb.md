---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: 0.195
output_speed_tps: 151.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.8, z: -1.22, r: 31.8, estimated: false }  # 전문 지식
  reasoning: { s: 14.5, z: -1.03, r: 34.5, estimated: false }  # 추론
  coding: { s: 21.7, z: -1.11, r: 33.4, estimated: false }  # 코딩
  agentic: { s: 12.4, z: -0.96, r: 35.6, estimated: true }  # 에이전트
  trust: { s: 34.2, z: 0.23, r: 53.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.6, z: -1.18, r: 32.3, estimated: true }  # 긴문맥
  instruction: { s: 29.4, z: -1.02, r: 34.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 151.0 t/s · TTFT 0.87s · 32k ctx` · 가성비 15.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.8 | -1.22 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.5 | -1.03 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.4 | -1.11 | 실측 | [[scicode]] 13.0%×1.0 |
| 에이전트 | 35.6 | -0.96 | 추정 | (추정) |
| 신뢰성 | 53.4 | +0.23 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.3 | -1.18 | 추정 | (추정) |
| 지시 따르기 | 34.7 | -1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
