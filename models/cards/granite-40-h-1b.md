---
type: Model
title: Granite 4.0 H 1B
creator: IBM
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 9.8, z: -1.48, r: 27.8, estimated: false }  # 전문 지식
  reasoning: { s: 8.9, z: -1.3, r: 30.5, estimated: false }  # 추론
  coding: { s: 8.9, z: -1.57, r: 26.4, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.43, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.2, r: 32.0, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.34, r: 29.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 H 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-12
timestamp: 2026-07-12T00:00:00Z
---

# Granite 4.0 H 1B

IBM · Open · Unknown · 컨텍스트 128k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.8 | -1.48 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.5 | -1.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 26.4 | -1.57 | 실측 | [[scicode]] 8.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.0 | -1.2 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 29.9 | -1.34 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
