---
type: Model
title: EXAONE 4.0 32B (non-reasoning)
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.3, z: -0.47, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 2.3, z: -1.11, r: 33.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.4, z: -1.01, r: 34.8, estimated: true }  # 긴문맥
  instruction: { s: 30.1, z: -0.98, r: 35.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.0 32B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# EXAONE 4.0 32B (non-reasoning)

LG AI Research · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 62.8%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[gpqa-diamond]] 62.8%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 1.5%×0.5 |
| 에이전트 | 33.4 | -1.11 | 실측 | [[terminal-bench]] 1.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.8 | -1.01 | 추정 | (추정) |
| 지시 따르기 | 35.2 | -0.98 | 실측 | [[ifbench]] 33.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
