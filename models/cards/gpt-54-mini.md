---
type: Model
title: GPT-5.4 mini
creator: OpenAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 0.65
output_speed_tps: 166.0
context_window: 400000
radar:
  knowledge: { s: 39.4, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -1.0, r: 35.0, estimated: false }  # 추론
  coding: { s: 54.0, z: -0.23, r: 46.5, estimated: false }  # 코딩
  agentic: { s: 26.4, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 1.2, z: -1.14, r: 32.9, estimated: false }  # 신뢰성
  multimodal: { s: 58.6, z: -0.82, r: 37.8, estimated: false }  # 멀티모달
  long_context: { s: 40.5, z: -1.08, r: 33.8, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -1.21, r: 31.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# GPT-5.4 mini

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.65/1M · 166.0 t/s · TTFT 0.72s · 400k ctx` · 가성비 26.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 35.0 | -1.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 46.5 | -0.23 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[gdpval]] 13.0%×1.0, [[itbench]] 17.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 32.9 | -1.14 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | 37.8 | -0.82 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 33.8 | -1.08 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 31.9 | -1.21 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
