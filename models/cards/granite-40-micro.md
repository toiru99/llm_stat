---
type: Model
title: Granite 4.0 Micro
creator: IBM
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 16.1, z: -1.22, r: 31.7, estimated: false }  # 전문 지식
  reasoning: { s: 11.9, z: -1.14, r: 32.9, estimated: false }  # 추론
  coding: { s: 14.3, z: -1.39, r: 29.1, estimated: false }  # 코딩
  agentic: { s: 8.1, z: -1.13, r: 33.1, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.04, r: 34.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.2, z: -1.29, r: 30.6, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.43, r: 28.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Granite 4.0 Micro

IBM · Open · Tiny(3B) · 컨텍스트 128k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.7 | -1.22 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.9 | -1.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 29.1 | -1.39 | 실측 | [[scicode]] 12.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.1 | -1.13 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 34.4 | -1.04 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.6 | -1.29 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 28.6 | -1.43 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
