---
type: Model
title: GPT-5.6 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 2.17
output_speed_tps: 122.0
context_window: 1000000
radar:
  knowledge: { s: 76.8, z: 0.91, r: 63.7, estimated: false }  # 전문 지식
  reasoning: { s: 78.8, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 84.8, z: 0.92, r: 63.7, estimated: false }  # 코딩
  agentic: { s: 78.6, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: 11.2, z: -0.69, r: 39.6, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.69, r: 60.3, estimated: false }  # 멀티모달
  long_context: { s: 97.3, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.16, r: 52.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.17/1M · 122.0 t/s · TTFT 2.07s · 1M ctx` · 가성비 22.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.7 | +0.91 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 63.7 | +0.92 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 64.4 | +0.96 | 실측 | [[gdpval]] 51.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[tau3-banking]] 22.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 39.6 | -0.69 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 60.3 | +0.69 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 52.4 | +0.16 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
