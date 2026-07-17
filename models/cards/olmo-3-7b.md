---
type: Model
title: Olmo 3 7B
creator: Allen Institute for AI
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0.11
output_speed_tps: None
context_window: 65500
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.0, z: -1.19, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 15.1, z: -0.97, r: 35.4, estimated: false }  # 추론
  coding: { s: 11.1, z: -1.48, r: 27.8, estimated: false }  # 코딩
  agentic: { s: 6.6, z: -1.15, r: 32.7, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.93, r: 36.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.44, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.94, r: 36.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Olmo 3 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Olmo 3 7B

Allen Institute for AI · Open · Unknown · 컨텍스트 65k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.2 · 혼합 $0.11/1M · None t/s · TTFT Nones · 65k ctx` · 가성비 27.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.19 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 35.4 | -0.97 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 27.8 | -1.48 | 실측 | [[scicode]] 10.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.7 | -1.15 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 36.1 | -0.93 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.44 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 36.0 | -0.94 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
