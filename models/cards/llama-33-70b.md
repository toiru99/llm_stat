---
type: Model
title: Llama 3.3 70B
creator: Meta
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.59
output_speed_tps: 86.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.9, z: -0.56, r: 41.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.8, z: -0.83, r: 37.5, estimated: false }  # 추론
  coding: { s: 30.4, z: -0.67, r: 40.0, estimated: false }  # 코딩
  agentic: { s: 7.0, z: -1.14, r: 32.9, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.53, r: 42.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.7, z: -0.86, r: 37.1, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.13, r: 48.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Llama 3.3 70B

Meta · Open · Unknown · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.58 · 출력 $0.71 · 혼합 $0.59/1M · 86.0 t/s · TTFT 1.61s · 128k ctx` · 가성비 15.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.5 | -0.56 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 50.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.5 | -0.83 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 50.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.0 | -0.67 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 32.9 | -1.14 | 실측 | [[gdpval]] 0.0%×1.0, [[itbench]] 1.0%×1.0, [[tau2-bench]] 27.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.1 | -0.86 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 48.0 | -0.13 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
