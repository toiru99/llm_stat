---
type: Model
title: GPT-6.2 Astra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 56.9986252138657
price_blended_usd_1m: 5.88
output_speed_tps: 43.2559323315818
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.7, z: 1.52, r: 72.7, estimated: true }  # 전문 지식
  reasoning: { s: 67.2, z: 1.56, r: 73.4, estimated: true }  # 추론
  coding: { s: 81.4, z: 1.4, r: 71.1, estimated: true }  # 코딩
  agentic: { s: 82.6, z: 1.3, r: 69.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.5, z: 1.23, r: 68.5, estimated: false }  # 멀티모달
  long_context: { s: 92.0, z: 1.14, r: 67.1, estimated: true }  # 긴문맥
  instruction: { s: 79.1, z: 1.06, r: 65.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.2 Astra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-6.2 Astra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.9986252138657**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.88/1M · 43.2559323315818 t/s · TTFT 3.85384699891569s · 1M ctx` · 가성비 9.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.7 | +1.52 | 추정 | (추정) |
| 추론 | 73.4 | +1.56 | 추정 | (추정) |
| 코딩 | 71.1 | +1.4 | 추정 | (추정) |
| 에이전트 | 69.6 | +1.3 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.5 | +1.23 | 실측 | [[mmmu-pro]] 86.1271676300578%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 추정 | (추정) |
| 지시 따르기 | 65.8 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
