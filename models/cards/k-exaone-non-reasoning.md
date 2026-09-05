---
type: Model
title: K-EXAONE (Non-reasoning)
creator: LG AI Research
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 236
is_reasoning: false
radar:
  knowledge: { s: 30.0, z: -0.53, r: 42.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.7, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.75, r: 38.7, estimated: false }  # 코딩
  agentic: { s: 35.1, z: -0.09, r: 48.6, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.32, r: 54.8, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.55, r: 41.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# K-EXAONE (Non-reasoning)

LG AI Research · Open · Large(236B) · 컨텍스트 256k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 38.7 | -0.75 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 48.6 | -0.09 | 실측 | [[tau2-bench]] 59.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.8 | +0.32 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 41.8 | -0.55 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
