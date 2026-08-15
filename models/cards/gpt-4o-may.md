---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 6
output_speed_tps: 103.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.7, z: -0.55, r: 41.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.2, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.14, r: 52.1, estimated: false }  # 코딩
  agentic: { s: 36.8, z: 0.01, r: 50.1, estimated: true }  # 에이전트
  trust: { s: 45.1, z: 0.8, r: 61.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.3, z: -0.39, r: 44.1, estimated: true }  # 긴문맥
  instruction: { s: 55.5, z: 0.05, r: 50.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $6/1M · 103.0 t/s · TTFT 0.99s · 128k ctx` · 가성비 1.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.8 | -0.55 | 실측 | [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 52.1 | +0.14 | 실측 | [[scicode]] 31.0%×1.0 |
| 에이전트 | 50.1 | +0.01 | 추정 | (추정) |
| 신뢰성 | 61.9 | +0.8 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.1 | -0.39 | 추정 | (추정) |
| 지시 따르기 | 50.8 | +0.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
