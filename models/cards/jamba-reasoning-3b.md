---
type: Model
title: Jamba Reasoning 3B
creator: AI21 Labs
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 3
is_reasoning: true
radar:
  knowledge: { s: 13.4, z: -1.33, r: 30.1, estimated: false }  # 전문 지식
  reasoning: { s: 10.6, z: -1.18, r: 32.4, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.07, r: 34.0, estimated: false }  # 코딩
  agentic: { s: 8.8, z: -1.1, r: 33.6, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.26, r: 53.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.7, z: -1.3, r: 30.5, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.16, r: 52.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba Reasoning 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Jamba Reasoning 3B

AI21 Labs · Open · Tiny(3B) · 컨텍스트 262k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.1 | -1.33 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 32.4 | -1.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.0 | -1.07 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 33.6 | -1.1 | 실측 | [[tau2-bench]] 16.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 53.9 | +0.26 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.5 | -1.3 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 52.4 | +0.16 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
