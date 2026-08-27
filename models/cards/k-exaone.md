---
type: Model
title: K-EXAONE
creator: LG AI Research
license: Open
intelligence_index: 22.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 236
is_reasoning: false
radar:
  knowledge: { s: 36.9, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 51.6, z: 0.11, r: 51.7, estimated: false }  # 코딩
  agentic: { s: 38.5, z: 0.04, r: 50.7, estimated: false }  # 에이전트
  trust: { s: 10.5, z: -0.77, r: 38.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.6, r: 59.0, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.82, r: 62.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# K-EXAONE

LG AI Research · Open · Large(236B) · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 51.7 | +0.11 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 50.7 | +0.04 | 실측 | [[gdpval]] 4.0%×1.0, [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.0 | +0.6 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 62.3 | +0.82 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
