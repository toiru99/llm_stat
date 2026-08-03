---
type: Model
title: Doubao Seed Code
creator: ByteDance Seed
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.1, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.9, z: -0.03, r: 49.5, estimated: false }  # 추론
  coding: { s: 59.2, z: 0.51, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 49.7, z: 0.52, r: 57.8, estimated: false }  # 에이전트
  trust: { s: 23.0, z: -0.24, r: 46.4, estimated: false }  # 신뢰성
  multimodal: { s: 75.7, z: 0.19, r: 52.9, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.07, r: 51.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Doubao Seed Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Doubao Seed Code

ByteDance Seed · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 49.5 | -0.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 57.6 | +0.51 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 57.8 | +0.52 | 실측 | [[tau2-bench]] 58.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 46.4 | -0.24 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 52.9 | +0.19 | 실측 | [[mmmu-pro]] 68.0%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 51.1 | +0.07 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
