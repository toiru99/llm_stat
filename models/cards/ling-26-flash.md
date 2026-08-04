---
type: Model
title: Ling 2.6 Flash
creator: InclusionAI
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.064
output_speed_tps: 91.0
context_window: 262000
status: current
size_class: Medium
params_b: 107
is_reasoning: false
radar:
  knowledge: { s: 29.1, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.6, r: 41.1, estimated: false }  # 추론
  coding: { s: 40.6, z: -0.27, r: 46.0, estimated: false }  # 코딩
  agentic: { s: 32.6, z: -0.15, r: 47.8, estimated: false }  # 에이전트
  trust: { s: 3.4, z: -1.16, r: 32.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.49, r: 42.6, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.42, r: 56.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 2.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Ling 2.6 Flash

InclusionAI · Open · Medium(107B) · 컨텍스트 262k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · 91.0 t/s · TTFT 1.08s · 262k ctx` · 가성비 218.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.1 | -0.6 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 46.0 | -0.27 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 47.8 | -0.15 | 실측 | [[gdpval]] 2.0%×1.0, [[tau2-bench]] 86.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.6 | -0.49 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 56.3 | +0.42 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
