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
  knowledge: { s: 14.8, z: -1.24, r: 31.4, estimated: false }  # 전문 지식
  reasoning: { s: 10.5, z: -1.2, r: 32.0, estimated: false }  # 추론
  coding: { s: 14.3, z: -1.36, r: 29.6, estimated: false }  # 코딩
  agentic: { s: 8.1, z: -1.1, r: 33.6, estimated: false }  # 에이전트
  trust: { s: 3.4, z: -1.16, r: 32.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 5.3, z: -1.31, r: 30.4, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.61, r: 25.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 Micro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Granite 4.0 Micro

IBM · Open · Tiny(3B) · 컨텍스트 128k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.4 | -1.24 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.0 | -1.2 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 29.6 | -1.36 | 실측 | [[scicode]] 12.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.6 | -1.1 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.4 | -1.31 | 실측 | [[aa-lcr]] 4.0%×1.0 |
| 지시 따르기 | 25.8 | -1.61 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
