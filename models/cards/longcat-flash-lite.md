---
type: Model
title: LongCat Flash Lite
creator: LongCat
license: Open
intelligence_index: 17.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Medium
params_b: 68.5
is_reasoning: false
radar:
  knowledge: { s: 27.9, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 24.1, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 35.7, z: -0.48, r: 42.8, estimated: false }  # 코딩
  agentic: { s: 48.7, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.07, r: 34.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 34.9, z: -0.47, r: 43.0, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat Flash Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# LongCat Flash Lite

LongCat · Open · Medium(68.5B) · 컨텍스트 256k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 42.8 | -0.48 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[tau2-bench]] 80.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 34.0 | -1.07 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.0 | -0.47 | 실측 | [[aa-lcr]] 29.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
