---
type: Model
title: GPT-5.5 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 4.35
output_speed_tps: 59.0
context_window: 922000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 66.0, z: 1.24, r: 68.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 77.0, z: 1.31, r: 69.7, estimated: false }  # 코딩
  agentic: { s: 58.9, z: 0.88, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 9.4, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 81.2, z: 0.46, r: 57.0, estimated: false }  # 멀티모달
  long_context: { s: 73.7, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.19, r: 47.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# GPT-5.5 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 59.0 t/s · TTFT 0.91s · 922k ctx` · 가성비 8.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.7 | +1.24 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 69.7 | +1.31 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 63.3 | +0.88 | 실측 | [[gdpval]] 31.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 57.0 | +0.46 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 47.2 | -0.19 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
