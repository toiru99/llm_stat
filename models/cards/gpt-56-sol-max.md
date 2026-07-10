---
type: Model
title: GPT-5.6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 4.35
output_speed_tps: 83.0
context_window: 1000000
radar:
  knowledge: { s: 96.0, z: 1.76, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 96.2, z: 2.12, r: 81.8, estimated: false }  # 추론
  coding: { s: 95.6, z: 1.39, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 96.9, z: 1.69, r: 75.3, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: 98.3, z: 1.07, r: 66.1, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Sol (max)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 83.0 t/s · TTFT 271.68s · 1M ctx` · 가성비 13.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.76 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 81.8 | +2.12 | 실측 | [[critpt]] 32.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 70.8 | +1.39 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 66.0%×0.5 |
| 에이전트 | 75.3 | +1.69 | 실측 | [[gdpval]] 62.0%×1.0, [[itbench]] 56.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 33.0%×1.0, [[terminal-bench]] 66.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 66.1 | +1.07 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
