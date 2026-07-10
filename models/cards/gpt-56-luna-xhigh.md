---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 0.87
output_speed_tps: 184.0
context_window: 1000000
radar:
  knowledge: { s: 73.2, z: 0.75, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 75.6, z: 1.2, r: 68.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 0.85, r: 62.7, estimated: false }  # 코딩
  agentic: { s: 77.6, z: 0.92, r: 63.8, estimated: false }  # 에이전트
  trust: { s: 7.5, z: -0.82, r: 37.7, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.69, r: 60.3, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.77, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 77.9, z: 0.37, r: 55.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $6.0 · 혼합 $0.87/1M · 184.0 t/s · TTFT 34.74s · 1M ctx` · 가성비 56.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.75 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 68.0 | +1.2 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 62.7 | +0.85 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 63.8 | +0.92 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 37.7 | -0.82 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 60.3 | +0.69 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 61.5 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 55.6 | +0.37 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
