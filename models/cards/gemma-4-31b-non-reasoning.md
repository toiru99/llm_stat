---
type: Model
title: Gemma 4 31B (non-reasoning)
creator: Google
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.168
output_speed_tps: 42.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.2, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.21, r: 46.8, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.47, r: 43.0, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.2, r: 53.0, estimated: false }  # 멀티모달
  long_context: { s: 52.8, z: 0.03, r: 50.5, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.14, r: 52.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Gemma 4 31B (non-reasoning)

Google · Open · Small · 컨텍스트 256k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.15 · 출력 $0.4 · 혼합 $0.168/1M · 42.0 t/s · TTFT 1.89s · 256k ctx` · 가성비 83.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 46.8 | -0.21 | 실측 | [[gdpval]] 3.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 53.0 | +0.2 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 50.5 | +0.03 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
