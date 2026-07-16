---
type: Model
title: Jamba Reasoning 3B
creator: AI21 Labs
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 13.7, z: -1.3, r: 30.5, estimated: false }  # 전문 지식
  reasoning: { s: 11.7, z: -1.16, r: 32.7, estimated: false }  # 추론
  coding: { s: 7.2, z: -1.65, r: 25.2, estimated: false }  # 코딩
  agentic: { s: 8.8, z: -1.07, r: 34.0, estimated: false }  # 에이전트
  trust: { s: 15.3, z: -0.59, r: 41.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.2, z: -1.16, r: 32.6, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.17, r: 52.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba Reasoning 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Jamba Reasoning 3B

AI21 Labs · Open · Unknown · 컨텍스트 262k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.5 | -1.3 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.7 | -1.16 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 25.2 | -1.65 | 실측 | [[scicode]] 6.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 34.0 | -1.07 | 실측 | [[tau2-bench]] 16.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 41.1 | -0.59 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.6 | -1.16 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 52.5 | +0.17 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
