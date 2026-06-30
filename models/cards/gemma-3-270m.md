---
type: Model
title: Gemma 3 270M
creator: Google
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
radar:
  knowledge: { s: 4.1, z: -2.12, r: 18.2, estimated: false }  # 전문 지식
  reasoning: { s: 6.3, z: -1.79, r: 23.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -2.57, r: 11.4, estimated: false }  # 코딩
  agentic: { s: 4.5, z: -1.77, r: 23.5, estimated: false }  # 에이전트
  trust: { s: 80.0, z: 1.64, r: 74.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -2.47, r: 12.9, estimated: false }  # 긴문맥
  instruction: { s: 0.0, z: -2.81, r: 7.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 270M
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Gemma 3 270M

Google · Open · 컨텍스트 32k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 18.2 | -2.12 | 실측 | [[aa-omniscience]] 1.0%×1.0, [[gpqa-diamond]] 22.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 23.2 | -1.79 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 22.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 11.4 | -2.57 | 실측 | [[scicode]] 0.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 23.5 | -1.77 | 실측 | [[tau2-bench]] 9.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 74.7 | +1.64 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 12.9 | -2.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 7.8 | -2.81 | 실측 | [[ifbench]] 12.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
