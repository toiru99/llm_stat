---
type: Model
title: gpt-oss-20B (high)
creator: OpenAI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.07
output_speed_tps: 227.0
context_window: 131000
radar:
  knowledge: { s: 34.2, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 43.6, z: -0.76, r: 38.6, estimated: false }  # 코딩
  agentic: { s: 17.4, z: -1.35, r: 29.7, estimated: false }  # 에이전트
  trust: { s: 2.5, z: -1.12, r: 33.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.9, z: -1.07, r: 34.0, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.27, r: 54.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20B (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# gpt-oss-20B (high)

OpenAI · Open · 컨텍스트 131k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.07/1M · 227.0 t/s · TTFT 0.84s · 131k ctx` · 가성비 214.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 38.6 | -0.76 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 29.7 | -1.35 | 실측 | [[apex-agents]] 1.0%×1.0, [[gdpval]] 3.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 33.2 | -1.12 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.0 | -1.07 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 54.1 | +0.27 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
