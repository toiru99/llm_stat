---
type: Model
title: Llama 3.3 70B
creator: Meta
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.6615
output_speed_tps: 87.0
context_window: 128000
status: current
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 28.6, z: -0.61, r: 40.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.5, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 30.4, z: -0.74, r: 38.9, estimated: false }  # 코딩
  agentic: { s: 8.0, z: -1.13, r: 33.0, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.8, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.3, z: -0.95, r: 35.8, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.21, r: 46.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Llama 3.3 70B

Meta · Open · Medium(70B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.66 · 출력 $0.72 · 혼합 $0.6615/1M · 87.0 t/s · TTFT 1.61s · 128k ctx` · 가성비 13.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.9 | -0.61 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 50.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 50.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.9 | -0.74 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 33.0 | -1.13 | 실측 | [[gdpval]] 0.0%×1.0, [[itbench]] 1.0%×1.0, [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 37.9 | -0.8 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.8 | -0.95 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
