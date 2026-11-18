---
type: Model
title: Ring-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.1, z: 0.71, r: 60.7, estimated: false }  # 전문 지식
  reasoning: { s: 42.1, z: 0.32, r: 54.8, estimated: false }  # 추론
  coding: { s: 56.3, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 55.6, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 45.6, z: -0.35, r: 44.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Ring-2.6-1T

InclusionAI · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.7 | +0.71 | 실측 | [[gpqa-diamond]] 85.6565656565657%×0.4, [[humanitys-last-exam]] 21.5940685820204%×0.3 |
| 추론 | 54.8 | +0.32 | 실측 | [[critpt]] 3.7142857142857104%×1.0, [[gpqa-diamond]] 85.6565656565657%×1.0, [[humanitys-last-exam]] 21.5940685820204%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[scicode]] 45.0231481481481%×1.0, [[terminal-bench]] 28.7878787878788%×0.5 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[gdpval]] 752.76%×1.0, [[tau2-bench]] 92.3976608187135%×1.0, [[tau3-banking]] 17.9381443298969%×1.0, [[terminal-bench]] 28.7878787878788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 44.8 | -0.35 | 실측 | [[ifbench]] 44.5578231292517%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
