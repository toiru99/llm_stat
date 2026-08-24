---
type: Model
title: Granite 4.0 H 1B
creator: IBM
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 1.5
is_reasoning: false
radar:
  knowledge: { s: 9.4, z: -1.52, r: 27.2, estimated: false }  # 전문 지식
  reasoning: { s: 8.7, z: -1.31, r: 30.4, estimated: false }  # 추론
  coding: { s: 8.9, z: -1.62, r: 25.7, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.05, r: 34.3, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.41, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.2, z: -1.31, r: 30.4, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.41, r: 28.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 H 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Granite 4.0 H 1B

IBM · Open · Tiny(1.5B) · 컨텍스트 128k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.2 | -1.52 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.4 | -1.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 25.7 | -1.62 | 실측 | [[scicode]] 8.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.3 | -1.05 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.4 | -1.31 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 28.8 | -1.41 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
