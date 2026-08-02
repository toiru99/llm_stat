---
type: Model
title: Granite 4.0 H 350M
creator: IBM
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: current
size_class: Tiny
params_b: 0.34
is_reasoning: false
radar:
  knowledge: { s: 9.1, z: -1.52, r: 27.3, estimated: false }  # 전문 지식
  reasoning: { s: 9.6, z: -1.25, r: 31.2, estimated: false }  # 추론
  coding: { s: 2.2, z: -1.87, r: 22.0, estimated: false }  # 코딩
  agentic: { s: 7.6, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: 5.7, z: -1.06, r: 34.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 8.5, z: -1.84, r: 22.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 H 350M
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Granite 4.0 H 350M

IBM · Open · Tiny(0.34B) · 컨텍스트 32k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.3 | -1.52 | 실측 | [[aa-omniscience]] 4.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 31.2 | -1.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 22.0 | -1.87 | 실측 | [[scicode]] 2.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.1 | -1.06 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 22.3 | -1.84 | 실측 | [[ifbench]] 18.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
