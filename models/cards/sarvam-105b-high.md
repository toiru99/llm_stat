---
type: Model
title: Sarvam 105B (high)
creator: Sarvam
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.04
output_speed_tps: 132.0
context_window: 128000
status: current
size_class: Medium
params_b: 106
is_reasoning: true
radar:
  knowledge: { s: 37.6, z: -0.13, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.12, r: 48.3, estimated: false }  # 추론
  coding: { s: 29.9, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.42, r: 43.7, estimated: false }  # 에이전트
  trust: { s: 5.9, z: -1.03, r: 34.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.6, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.87, r: 36.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sarvam 105B (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Sarvam 105B (high)

Sarvam · Open · Medium(106B) · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $0.04 · 출력 $0.17 · 혼합 $0.04/1M · 132.0 t/s · TTFT 2.04s · 128k ctx` · 가성비 300.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.13 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 48.3 | -0.12 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 43.7 | -0.42 | 실측 | [[tau2-bench]] 47.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 34.5 | -1.03 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.6 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 36.9 | -0.87 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
