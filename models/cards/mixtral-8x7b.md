---
type: Model
title: Mixtral 8x7B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.475
output_speed_tps: 56.2524916873927
context_window: 32768
status: past
size_class: Medium
params_b: 46.7
is_reasoning: false
radar:
  knowledge: { s: 14.9, z: -1.55, r: 26.8, estimated: false }  # 전문 지식
  reasoning: { s: 13.7, z: -1.07, r: 34.0, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Mixtral 8x7B

Mistral · Open · Medium(46.7B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: —

## 실용 지표
`입력 $0.45 · 출력 $0.7 · 혼합 $0.475/1M · 56.2524916873927 t/s · TTFT 0.766505750372276s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 26.8 | -1.55 | 실측 | [[gpqa-diamond]] 29.1919%×0.4, [[humanitys-last-exam]] 4.68%×0.3 |
| 추론 | 34.0 | -1.07 | 실측 | [[gpqa-diamond]] 29.1919%×1.0, [[humanitys-last-exam]] 4.68%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
