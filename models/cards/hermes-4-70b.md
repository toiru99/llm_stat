---
type: Model
title: Hermes 4 70B
creator: Nous Research
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.157
output_speed_tps: 89.0
context_window: 128000
status: current
size_class: Medium
params_b: 70.6
is_reasoning: true
radar:
  knowledge: { s: 40.4, z: -0.04, r: 49.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 40.3, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.04, r: 34.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.6, z: -1.24, r: 31.5, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.12, r: 33.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Hermes 4 70B

Nous Research · Open · Medium(70.6B) · 컨텍스트 128k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.157/1M · 89.0 t/s · TTFT 1.49s · 128k ctx` · 가성비 63.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.4 | -0.04 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 34.3 | -1.04 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.5 | -1.24 | 실측 | [[aa-lcr]] 8.0%×1.0 |
| 지시 따르기 | 33.2 | -1.12 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
