---
type: Model
title: GPT-5.4 mini
creator: OpenAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 0.65
output_speed_tps: 164.0
context_window: 400000
radar:
  knowledge: { s: 39.4, z: -0.59, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -1.06, r: 34.1, estimated: false }  # 추론
  coding: { s: 54.0, z: -0.3, r: 45.5, estimated: false }  # 코딩
  agentic: { s: 27.2, z: -0.96, r: 35.5, estimated: false }  # 에이전트
  trust: { s: 1.2, z: -1.16, r: 32.5, estimated: false }  # 신뢰성
  multimodal: { s: 58.6, z: -0.91, r: 36.3, estimated: false }  # 멀티모달
  long_context: { s: 40.5, z: -1.12, r: 33.2, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -1.29, r: 30.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# GPT-5.4 mini

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.65/1M · 164.0 t/s · TTFT 0.73s · 400k ctx` · 가성비 26.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.59 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 34.1 | -1.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 45.5 | -0.3 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 35.5 | -0.96 | 실측 | [[gdpval]] 14.0%×1.0, [[itbench]] 17.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 32.5 | -1.16 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | 36.3 | -0.91 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 33.2 | -1.12 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 30.6 | -1.29 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
