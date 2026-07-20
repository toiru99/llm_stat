---
type: Model
title: Ring-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.52
output_speed_tps: 135.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.6, z: 0.48, r: 57.2, estimated: false }  # 전문 지식
  reasoning: { s: 45.2, z: 0.61, r: 59.1, estimated: false }  # 추론
  coding: { s: 61.3, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 53.2, z: 0.66, r: 59.8, estimated: false }  # 에이전트
  trust: { s: 17.6, z: -0.48, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.25, r: 46.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Ring-2.6-1T

InclusionAI · Open · Unknown · 컨텍스트 262k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 135.0 t/s · TTFT 3.2s · 262k ctx` · 가성비 59.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.2 | +0.48 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 59.1 | +0.61 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 59.8 | +0.66 | 실측 | [[gdpval]] 21.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 42.9 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 46.2 | -0.25 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
