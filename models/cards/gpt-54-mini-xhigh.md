---
type: Model
title: GPT-5.4 mini (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.65
output_speed_tps: 177.0
context_window: 400000
radar:
  knowledge: { s: 65.7, z: 0.62, r: 59.3, estimated: false }  # 전문 지식
  reasoning: { s: 57.9, z: 0.6, r: 59.1, estimated: false }  # 추론
  coding: { s: 83.1, z: 1.0, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 68.6, z: 0.66, r: 59.9, estimated: false }  # 에이전트
  trust: { s: 7.5, z: -0.95, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: 81.0, z: 0.26, r: 54.0, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 0.76, r: 61.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# GPT-5.4 mini (xhigh)

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.65/1M · 177.0 t/s · TTFT 5.35s · 400k ctx` · 가성비 61.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.3 | +0.62 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 59.1 | +0.6 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 64.9 | +1.0 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 59.9 | +0.66 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 35.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 35.7 | -0.95 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 54.0 | +0.26 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 61.3 | +0.76 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
