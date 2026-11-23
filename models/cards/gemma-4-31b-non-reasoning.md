---
type: Model
title: Gemma 4 31B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.168
output_speed_tps: 39.9828081033466
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.2, z: 0.14, r: 52.1, estimated: false }  # 전문 지식
  reasoning: { s: 30.5, z: -0.25, r: 46.2, estimated: false }  # 추론
  coding: { s: 46.0, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 42.8, z: -0.07, r: 48.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.5, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 52.6, z: -0.03, r: 49.5, estimated: false }  # 긴문맥
  instruction: { s: 58.1, z: 0.17, r: 52.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Gemma 4 31B (non-reasoning)

Google · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.15 · 출력 $0.4 · 혼합 $0.168/1M · 39.9828081033466 t/s · TTFT 3.41546467896779s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.1 | +0.14 | 실측 | [[gpqa-diamond]] 76.2626262626263%×0.4, [[humanitys-last-exam]] 11.8164967562558%×0.3 |
| 추론 | 46.2 | -0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.2626262626263%×1.0, [[humanitys-last-exam]] 11.8164967562558%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[terminal-bench]] 30.303030303030297%×0.5 |
| 에이전트 | 48.9 | -0.07 | 실측 | [[gdpval]] 554.69%×1.0, [[tau2-bench]] 65.4970760233918%×1.0, [[tau3-banking]] 8.8659793814433%×1.0, [[terminal-bench]] 30.303030303030297%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 70.3468208092486%×1.0 |
| 긴문맥 | 49.5 | -0.03 | 실측 | [[aa-lcr]] 46.6666666666667%×1.0 |
| 지시 따르기 | 52.6 | +0.17 | 실측 | [[ifbench]] 53.469387755102005%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
