---
type: Model
title: GPT-6.1 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.735
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.3, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.6, z: -0.38, r: 44.3, estimated: false }  # 추론
  coding: { s: 67.3, z: 0.98, r: 64.7, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.15, r: 67.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.55, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.69, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 45.6, z: -0.32, r: 45.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-6.1 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 42.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[humanitys-last-exam]] 21.1%×0.3 |
| 추론 | 44.3 | -0.38 | 실측 | [[critpt]] 33.5%×1.0, [[humanitys-last-exam]] 21.1%×1.0 |
| 코딩 | 64.7 | +0.98 | 실측 | [[scicode]] 47.8%×1.0 |
| 에이전트 | 67.2 | +1.15 | 실측 | [[gdpval]] 1286.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.3 | +0.55 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 60.4 | +0.69 | 실측 | [[aa-lcr]] 67.7%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
