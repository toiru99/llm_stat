---
type: Model
title: Ling-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.5, z: -0.14, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 29.6, z: -0.31, r: 45.3, estimated: false }  # 추론
  coding: { s: 47.0, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.15, r: 67.3, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.13, r: 48.0, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.38, r: 55.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Ling-2.6-1T

InclusionAI · Open · Large · 컨텍스트 262k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 262k ctx` · 가성비 32.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.14 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 45.3 | -0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 67.3 | +1.15 | 실측 | [[tau2-bench]] 90.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.0 | -0.13 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 55.7 | +0.38 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
