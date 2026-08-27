---
type: Model
title: Granite 4.0 1B
creator: IBM
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 1.6
is_reasoning: false
radar:
  knowledge: { s: 10.9, z: -1.45, r: 28.2, estimated: false }  # 전문 지식
  reasoning: { s: 9.5, z: -1.28, r: 30.9, estimated: false }  # 추론
  coding: { s: 10.0, z: -1.58, r: 26.2, estimated: false }  # 코딩
  agentic: { s: 11.6, z: -0.99, r: 35.2, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -1.01, r: 34.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.2, z: -1.31, r: 30.4, estimated: false }  # 긴문맥
  instruction: { s: 12.7, z: -1.7, r: 24.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Granite 4.0 1B

IBM · Open · Tiny(1.6B) · 컨텍스트 128k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.2 | -1.45 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.9 | -1.28 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 26.2 | -1.58 | 실측 | [[scicode]] 9.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 35.2 | -0.99 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.8 | -1.01 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.4 | -1.31 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 24.5 | -1.7 | 실측 | [[ifbench]] 21.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
