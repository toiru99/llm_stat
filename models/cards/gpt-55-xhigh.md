---
type: Model
title: GPT-5.5 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 87.62339562037336
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.5, z: 1.65, r: 74.7, estimated: false }  # 전문 지식
  reasoning: { s: 78.0, z: 2.09, r: 81.4, estimated: false }  # 추론
  coding: { s: 84.2, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 85.0, z: 1.39, r: 70.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.2, z: 0.81, r: 62.1, estimated: false }  # 멀티모달
  long_context: { s: 95.1, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 89.5, z: 1.49, r: 72.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-5.5 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 87.62339562037336 t/s · TTFT 39.289644070642034s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.7 | +1.65 | 실측 | [[gpqa-diamond]] 93.53535353535351%×0.4, [[humanitys-last-exam]] 45.783132530120504%×0.3 |
| 추론 | 81.4 | +2.09 | 실측 | [[critpt]] 27.142857142857103%×1.0, [[gpqa-diamond]] 93.53535353535351%×1.0, [[humanitys-last-exam]] 45.783132530120504%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 55.787037037037%×1.0, [[terminal-bench]] 60.606060606060595%×0.5 |
| 에이전트 | 70.8 | +1.39 | 실측 | [[gdpval]] 1357.23%×1.0, [[tau2-bench]] 93.859649122807%×1.0, [[tau3-banking]] 38.9690721649485%×1.0, [[terminal-bench]] 60.606060606060595%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.1 | +0.81 | 실측 | [[mmmu-pro]] 79.8843930635838%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 84.3333333333333%×1.0 |
| 지시 따르기 | 72.4 | +1.49 | 실측 | [[ifbench]] 75.8503401360544%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
