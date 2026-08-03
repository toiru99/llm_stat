---
type: Model
title: LFM2 2.6B
creator: Liquid AI
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: current
size_class: Tiny
params_b: 2.57
is_reasoning: false
radar:
  knowledge: { s: 11.2, z: -1.42, r: 28.7, estimated: false }  # 전문 지식
  reasoning: { s: 10.9, z: -1.19, r: 32.2, estimated: false }  # 추론
  coding: { s: 3.8, z: -1.8, r: 23.0, estimated: false }  # 코딩
  agentic: { s: 7.3, z: -1.13, r: 33.0, estimated: false }  # 에이전트
  trust: { s: 44.8, z: 0.79, r: 61.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.73, r: 24.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2 2.6B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# LFM2 2.6B

Liquid AI · Open · Tiny(2.57B) · 컨텍스트 32k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.7 | -1.42 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 31.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.2 | -1.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 31.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.0 | -1.8 | 실측 | [[scicode]] 3.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 33.0 | -1.13 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 61.9 | +0.79 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 24.1 | -1.73 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
