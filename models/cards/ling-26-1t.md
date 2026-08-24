---
type: Model
title: Ling-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: 27.0
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 262000
status: past
size_class: Large
params_b: 1026
is_reasoning: false
radar:
  knowledge: { s: 39.9, z: -0.07, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.25, r: 46.2, estimated: false }  # 추론
  coding: { s: 56.8, z: 0.33, r: 55.0, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.23, r: 68.4, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.95, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.8, z: -0.15, r: 47.8, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.37, r: 55.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Ling-2.6-1T

InclusionAI · Open · Large(1026B) · 컨텍스트 262k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 262k ctx` · 가성비 51.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.07 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.2 | -0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 55.0 | +0.33 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 68.4 | +1.23 | 실측 | [[tau2-bench]] 90.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 35.7 | -0.95 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.8 | -0.15 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 55.5 | +0.37 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
