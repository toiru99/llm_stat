---
type: Model
title: Ring-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.52
output_speed_tps: 117.0
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.8, z: 0.38, r: 55.8, estimated: false }  # 전문 지식
  reasoning: { s: 45.3, z: 0.46, r: 56.8, estimated: false }  # 추론
  coding: { s: 56.9, z: 0.76, r: 61.4, estimated: false }  # 코딩
  agentic: { s: 47.5, z: 0.38, r: 55.7, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.86, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.29, r: 45.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Ring-2.6-1T

InclusionAI · Open · Large · 컨텍스트 262k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 117.0 t/s · TTFT 3.81s · 262k ctx` · 가성비 32.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.8 | +0.38 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 56.8 | +0.46 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 61.4 | +0.76 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 55.7 | +0.38 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.8 | +0.86 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 45.7 | -0.29 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
