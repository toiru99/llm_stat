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
  knowledge: { s: 52.9, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.3, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 31.1, z: -0.22, r: 46.7, estimated: false }  # 코딩
  agentic: { s: 28.2, z: -0.22, r: 46.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 70.3, z: -0.06, r: 49.1, estimated: false }  # 멀티모달
  long_context: { s: 61.7, z: 0.26, r: 53.9, estimated: false }  # 긴문맥
  instruction: { s: 64.5, z: 0.5, r: 57.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.5 33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# EXAONE 4.5 33B

LG AI Research · Open · Unknown · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[gpqa-diamond]] 79.4%×0.4, [[humanitys-last-exam]] 12.9%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[gpqa-diamond]] 79.4%×1.0, [[humanitys-last-exam]] 12.9%×1.0 |
| 코딩 | 46.7 | -0.22 | 실측 | [[terminal-bench]] 20.5%×0.5 |
| 에이전트 | 46.7 | -0.22 | 실측 | [[gdpval]] 474.0%×1.0, [[terminal-bench]] 20.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.1 | -0.06 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 53.9 | +0.26 | 실측 | [[aa-lcr]] 54.7%×1.0 |
| 지시 따르기 | 57.5 | +0.5 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
