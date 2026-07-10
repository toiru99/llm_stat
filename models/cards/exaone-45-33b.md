---
type: Model
title: EXAONE 4.5 33B
creator: LG AI Research
license: Open
intelligence_index: 23.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.8, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 34.4, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 41.2, z: -0.2, r: 47.0, estimated: false }  # 코딩
  agentic: { s: 54.5, z: 0.72, r: 60.8, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.4, estimated: false }  # 신뢰성
  multimodal: { s: 75.4, z: 0.19, r: 52.8, estimated: false }  # 멀티모달
  long_context: { s: 64.5, z: 0.48, r: 57.2, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.52, r: 57.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.5 33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# EXAONE 4.5 33B

LG AI Research · Open · Unknown · 컨텍스트 262k · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 47.0 | -0.2 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 60.8 | +0.72 | 실측 | [[tau2-bench]] 78.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 52.8 | +0.19 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 57.2 | +0.48 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 57.8 | +0.52 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
