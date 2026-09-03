---
type: Model
title: Gemma 4 31B (Non-reasoning)
creator: Google
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.167
output_speed_tps: 56.0
context_window: 256000
status: current
size_class: Small
params_b: 30.7
is_reasoning: false
radar:
  knowledge: { s: 36.5, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 59.2, z: 0.51, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 36.5, z: -0.04, r: 49.5, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.2, estimated: false }  # 신뢰성
  multimodal: { s: 77.5, z: 0.34, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 51.8, z: 0.05, r: 50.7, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.2, r: 53.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemma 4 31B (Non-reasoning)

Google · Open · Small(30.7B) · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.4 · 혼합 $0.167/1M · 56.0 t/s · TTFT 1.43s · 256k ctx` · 가성비 131.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 57.7 | +0.51 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 49.5 | -0.04 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 55.2 | +0.34 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 50.7 | +0.05 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 53.0 | +0.2 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
