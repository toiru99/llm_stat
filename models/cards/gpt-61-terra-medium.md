---
type: Model
title: GPT-6.1 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.735
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.8, z: 0.69, r: 60.3, estimated: false }  # 전문 지식
  reasoning: { s: 71.7, z: 1.18, r: 67.7, estimated: false }  # 추론
  coding: { s: 74.5, z: 1.24, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 71.0, z: 1.25, r: 68.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.9, z: 1.03, r: 65.5, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 72.4, z: 0.83, r: 62.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-6.1 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 51.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.3 | +0.69 | 실측 | [[humanitys-last-exam]] 40.2%×0.3 |
| 추론 | 67.7 | +1.18 | 실측 | [[critpt]] 56.5%×1.0, [[humanitys-last-exam]] 40.2%×1.0 |
| 코딩 | 68.5 | +1.24 | 실측 | [[scicode]] 51.6%×1.0 |
| 에이전트 | 68.8 | +1.25 | 실측 | [[gdpval]] 1325.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.5 | +1.03 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.7%×1.0 |
| 지시 따르기 | 62.4 | +0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
