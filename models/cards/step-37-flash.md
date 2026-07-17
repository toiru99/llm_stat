---
type: Model
title: Step 3.7 Flash
creator: StepFun
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.18
output_speed_tps: 376.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.9, z: 0.45, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 42.4, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 62.6, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 52.1, z: 0.61, r: 59.2, estimated: false }  # 에이전트
  trust: { s: 17.6, z: -0.48, r: 42.8, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.73, r: 61.0, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.7 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Step 3.7 Flash

StepFun · Open · Unknown · 컨텍스트 262k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.15 · 혼합 $0.18/1M · 376.0 t/s · TTFT 0.9s · 262k ctx` · 가성비 166.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.45 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 59.2 | +0.61 | 실측 | [[apex-agents]] 15.0%×1.0, [[gdpval]] 26.0%×1.0, [[itbench]] 30.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 61.0 | +0.73 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
