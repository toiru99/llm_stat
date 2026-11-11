---
type: Model
title: GPT-5.5 Instant (June 2026)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.9, z: 0.58, r: 58.7, estimated: false }  # 전문 지식
  reasoning: { s: 54.7, z: 0.57, r: 58.5, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.25, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 25.2, z: -0.33, r: 45.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.78, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 73.5, z: 0.89, r: 63.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (June 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# GPT-5.5 Instant (June 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.7 | +0.58 | 실측 | [[gpqa-diamond]] 82.3%×0.4, [[humanitys-last-exam]] 19.9%×0.3 |
| 추론 | 58.5 | +0.57 | 실측 | [[gpqa-diamond]] 82.3%×1.0, [[humanitys-last-exam]] 19.9%×1.0 |
| 코딩 | 68.8 | +1.25 | 실측 | [[scicode]] 52.5%×1.0 |
| 에이전트 | 45.1 | -0.33 | 실측 | [[gdpval]] 516.0%×1.0, [[tau3-banking]] 11.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.6 | +0.78 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.4 | +0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
