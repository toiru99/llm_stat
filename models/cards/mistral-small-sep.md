---
type: Model
title: Mistral Small (Sep)
creator: Mistral
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.24
output_speed_tps: 147.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.5, z: -0.91, r: 36.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.6, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.82, r: 37.8, estimated: false }  # 코딩
  agentic: { s: 7.5, z: -1.11, r: 33.3, estimated: true }  # 에이전트
  trust: { s: 16.7, z: -0.52, r: 42.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.3, z: -0.74, r: 38.9, estimated: true }  # 긴문맥
  instruction: { s: 42.0, z: -0.42, r: 43.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Mistral Small (Sep)

Mistral · Open · Unknown · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 147.0 t/s · TTFT 0.81s · 32k ctx` · 가성비 20.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.3 | -0.91 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.8 | -0.82 | 실측 | [[scicode]] 16.0%×1.0 |
| 에이전트 | 33.3 | -1.11 | 추정 | (추정) |
| 신뢰성 | 42.2 | -0.52 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.9 | -0.74 | 추정 | (추정) |
| 지시 따르기 | 43.7 | -0.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
