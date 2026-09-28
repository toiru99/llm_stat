---
type: Model
title: Step 3.7 Flash
creator: StepFun
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.183
output_speed_tps: 191.0
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.1, z: 0.31, r: 54.6, estimated: false }  # 전문 지식
  reasoning: { s: 40.7, z: 0.24, r: 53.6, estimated: false }  # 추론
  coding: { s: 59.3, z: 0.84, r: 62.6, estimated: false }  # 코딩
  agentic: { s: 47.8, z: 0.38, r: 55.7, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.58, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.99, r: 64.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.7 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Step 3.7 Flash

StepFun · Open · Large · 컨텍스트 262k · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.15 · 혼합 $0.183/1M · 191.0 t/s · TTFT 2.48s · 262k ctx` · 가성비 103.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.6 | +0.31 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 53.6 | +0.24 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 62.6 | +0.84 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 55.7 | +0.38 | 실측 | [[apex-agents]] 15.0%×1.0, [[gdpval]] 17.0%×1.0, [[itbench]] 30.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 41.4 | -0.58 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
