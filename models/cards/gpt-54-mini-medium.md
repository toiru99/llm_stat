---
type: Model
title: GPT-5.4 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.65
output_speed_tps: 160.0
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.9, z: 0.99, r: 64.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: 0.44, r: 56.7, estimated: false }  # 추론
  coding: { s: 66.1, z: 0.84, r: 62.6, estimated: false }  # 코딩
  agentic: { s: 44.4, z: 0.32, r: 54.9, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.76, r: 38.6, estimated: false }  # 신뢰성
  multimodal: { s: 81.2, z: 0.46, r: 56.9, estimated: false }  # 멀티모달
  long_context: { s: 80.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.92, r: 63.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# GPT-5.4 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.65/1M · 160.0 t/s · TTFT 6.63s · 400k ctx` · 가성비 46.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.99 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 56.7 | +0.44 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 62.6 | +0.84 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 54.9 | +0.32 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 56.9 | +0.46 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
