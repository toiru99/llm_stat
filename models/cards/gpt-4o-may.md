---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 6
output_speed_tps: 143.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.89, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 25.8, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.82, r: 37.7, estimated: true }  # 코딩
  agentic: { s: 11.0, z: -0.8, r: 38.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.4, z: -0.48, r: 42.9, estimated: true }  # 긴문맥
  instruction: { s: 29.0, z: -0.99, r: 35.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $6/1M · 143.0 t/s · TTFT 1.14s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.89 | 실측 | [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 37.7 | -0.82 | 추정 | (추정) |
| 에이전트 | 38.0 | -0.8 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.9 | -0.48 | 추정 | (추정) |
| 지시 따르기 | 35.1 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
