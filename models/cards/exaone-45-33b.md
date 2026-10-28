---
type: Model
title: EXAONE 4.5 33B
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 54.4, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.2, r: 52.9, estimated: false }  # 추론
  coding: { s: 30.3, z: -0.23, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 27.9, z: -0.22, r: 46.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 71.2, z: -0.04, r: 49.4, estimated: false }  # 멀티모달
  long_context: { s: 61.8, z: 0.29, r: 54.3, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.5, r: 57.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.5 33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# EXAONE 4.5 33B

LG AI Research · Open · Unknown · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 52.9 | +0.2 | 실측 | [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 46.6 | -0.23 | 실측 | [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 46.8 | -0.22 | 실측 | [[gdpval]] 475.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.4 | -0.04 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 54.3 | +0.29 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 57.5 | +0.5 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
