---
type: Model
title: GPT-5.6 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 2.17
output_speed_tps: 144.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.3, z: 1.99, r: 79.8, estimated: false }  # 전문 지식
  reasoning: { s: 90.5, z: 3.02, r: 95.2, estimated: false }  # 추론
  coding: { s: 89.3, z: 1.83, r: 77.5, estimated: false }  # 코딩
  agentic: { s: 90.0, z: 2.09, r: 81.4, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.54, r: 41.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.16, r: 67.3, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.45, r: 71.8, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.26, r: 69.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# GPT-5.6 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.17/1M · 144.0 t/s · TTFT 159.53s · 1M ctx` · 가성비 25.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.8 | +1.99 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 95.2 | +3.02 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 77.5 | +1.83 | 실측 | [[scicode]] 54.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 81.4 | +2.09 | 실측 | [[gdpval]] 55.0%×1.0, [[itbench]] 51.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 32.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 41.9 | -0.54 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 67.3 | +1.16 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 71.8 | +1.45 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 69.0 | +1.26 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
