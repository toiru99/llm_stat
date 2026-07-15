---
type: Model
title: Granite 4.0 350M
creator: IBM
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: current
size_class: Tiny
params_b: 0.35
is_reasoning: false
radar:
  knowledge: { s: 8.1, z: -1.57, r: 26.5, estimated: false }  # 전문 지식
  reasoning: { s: 9.6, z: -1.27, r: 31.0, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.91, r: 21.4, estimated: false }  # 코딩
  agentic: { s: 6.6, z: -1.15, r: 32.7, estimated: false }  # 에이전트
  trust: { s: 24.7, z: -0.14, r: 47.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 5.6, z: -1.92, r: 21.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 350M
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# Granite 4.0 350M

IBM · Open · Tiny(0.35B) · 컨텍스트 32k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.5 | -1.57 | 실측 | [[aa-omniscience]] 3.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 31.0 | -1.27 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 21.4 | -1.91 | 실측 | [[scicode]] 1.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.7 | -1.15 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 47.8 | -0.14 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 21.2 | -1.92 | 실측 | [[ifbench]] 16.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
