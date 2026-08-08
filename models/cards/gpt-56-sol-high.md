---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 4.35
output_speed_tps: 61.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.3, z: 2.38, r: 85.7, estimated: false }  # 전문 지식
  reasoning: { s: 87.8, z: 2.62, r: 89.3, estimated: false }  # 추론
  coding: { s: 94.6, z: 1.96, r: 79.5, estimated: false }  # 코딩
  agentic: { s: 83.5, z: 1.9, r: 78.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.5, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.15, r: 67.3, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.1, r: 66.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 61.0 t/s · TTFT 12.87s · 1M ctx` · 가성비 13.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.7 | +2.38 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 89.3 | +2.62 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 79.5 | +1.96 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 62.0%×0.5 |
| 에이전트 | 78.5 | +1.9 | 실측 | [[gdpval]] 56.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 37.0%×1.0, [[terminal-bench]] 62.0%×1.0 |
| 신뢰성 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 67.3 | +1.15 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
