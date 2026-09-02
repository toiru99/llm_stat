---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.12
output_speed_tps: 105.0
context_window: 256000
status: current
size_class: Small
params_b: 12
is_reasoning: true
radar:
  knowledge: { s: 36.6, z: -0.18, r: 47.2, estimated: false }  # 전문 지식
  reasoning: { s: 34.1, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.14, r: 52.1, estimated: false }  # 코딩
  agentic: { s: 24.6, z: -0.49, r: 42.7, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.32, r: 45.1, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.76, r: 61.4, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.45, r: 71.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemma 4 12B

Google · Open · Small(12B) · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 105.0 t/s · TTFT 2.37s · 256k ctx` · 가성비 183.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.2 | -0.18 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 52.1 | +0.14 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 42.7 | -0.49 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 36.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 45.1 | -0.32 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 61.4 | +0.76 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 71.8 | +1.45 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
