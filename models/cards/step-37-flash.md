---
type: Model
title: Step 3.7 Flash
creator: StepFun
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.183
output_speed_tps: 141.0
context_window: 262000
status: current
size_class: Large
params_b: 198
is_reasoning: true
radar:
  knowledge: { s: 49.2, z: 0.37, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 42.3, z: 0.32, r: 54.8, estimated: false }  # 추론
  coding: { s: 62.6, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 50.0, z: 0.5, r: 57.4, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.56, r: 41.7, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.64, r: 59.6, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.94, r: 64.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.7 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Step 3.7 Flash

StepFun · Open · Large(198B) · 컨텍스트 262k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.15 · 혼합 $0.183/1M · 141.0 t/s · TTFT 2.76s · 262k ctx` · 가성비 169.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.37 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 54.8 | +0.32 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 57.4 | +0.5 | 실측 | [[apex-agents]] 15.0%×1.0, [[gdpval]] 26.0%×1.0, [[itbench]] 30.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 41.7 | -0.56 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 59.6 | +0.64 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
