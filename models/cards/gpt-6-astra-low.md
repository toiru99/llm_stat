---
type: Model
title: GPT-6 Astra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 7.7
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.2, z: 1.76, r: 76.4, estimated: false }  # 전문 지식
  reasoning: { s: 87.9, z: 1.91, r: 78.6, estimated: false }  # 추론
  coding: { s: 78.7, z: 1.37, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 1.17, r: 67.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.15, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-6 Astra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 5.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.4 | +1.76 | 실측 | [[gpqa-diamond]] 93.1%×0.4, [[humanitys-last-exam]] 49.2%×0.3 |
| 추론 | 78.6 | +1.91 | 실측 | [[critpt]] 63.0%×1.0, [[gpqa-diamond]] 93.1%×1.0, [[humanitys-last-exam]] 49.2%×1.0 |
| 코딩 | 70.6 | +1.37 | 실측 | [[scicode]] 54.1%×1.0 |
| 에이전트 | 67.6 | +1.17 | 실측 | [[gdpval]] 1403.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
