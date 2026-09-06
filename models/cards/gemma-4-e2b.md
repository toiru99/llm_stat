---
type: Model
title: Gemma 4 E2B
creator: Google
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 5.1
is_reasoning: true
radar:
  knowledge: { s: 16.4, z: -1.18, r: 32.3, estimated: false }  # 전문 지식
  reasoning: { s: 15.1, z: -0.96, r: 35.6, estimated: false }  # 추론
  coding: { s: 4.5, z: -0.96, r: 35.5, estimated: false }  # 코딩
  agentic: { s: 8.6, z: -1.11, r: 33.4, estimated: false }  # 에이전트
  trust: { s: 68.0, z: 2.06, r: 80.8, estimated: false }  # 신뢰성
  multimodal: { s: 41.7, z: -1.41, r: 28.8, estimated: false }  # 멀티모달
  long_context: { s: 18.0, z: -0.96, r: 35.6, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.67, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemma 4 E2B

Google · Open · Small(5.1B) · 컨텍스트 128k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.3 | -1.18 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.6 | -0.96 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 35.5 | -0.96 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 33.4 | -1.11 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 80.8 | +2.06 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | 28.8 | -1.41 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 35.6 | -0.96 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 39.9 | -0.67 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
