---
type: Model
title: Mistral Medium
creator: Mistral
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: 2.1
output_speed_tps: 138.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.2, z: -1.07, r: 34.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.5, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 11.5, z: -0.99, r: 35.1, estimated: true }  # 에이전트
  trust: { s: 5.6, z: -0.88, r: 36.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.3, z: -1.01, r: 34.8, estimated: true }  # 긴문맥
  instruction: { s: 36.5, z: -0.66, r: 40.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Mistral Medium

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $2.1/1M · 138.0 t/s · TTFT 2.36s · 32k ctx` · 가성비 1.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.0 | -1.07 | 실측 | [[gpqa-diamond]] 35.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[gpqa-diamond]] 35.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 35.1 | -0.99 | 추정 | (추정) |
| 신뢰성 | 36.8 | -0.88 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.8 | -1.01 | 추정 | (추정) |
| 지시 따르기 | 40.0 | -0.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
