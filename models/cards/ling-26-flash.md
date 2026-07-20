---
type: Model
title: Ling 2.6 Flash
creator: InclusionAI
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.06
output_speed_tps: 181.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.1, z: -0.55, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.58, r: 41.3, estimated: false }  # 추론
  coding: { s: 40.6, z: -0.24, r: 46.4, estimated: false }  # 코딩
  agentic: { s: 32.7, z: -0.14, r: 47.9, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.14, r: 32.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.47, r: 43.0, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.45, r: 56.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 2.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Ling 2.6 Flash

InclusionAI · Open · Unknown · 컨텍스트 262k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.06/1M · 181.0 t/s · TTFT 1.12s · 262k ctx` · 가성비 233.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.55 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.3 | -0.58 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 46.4 | -0.24 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 47.9 | -0.14 | 실측 | [[gdpval]] 2.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 32.9 | -1.14 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.0 | -0.47 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 56.8 | +0.45 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
