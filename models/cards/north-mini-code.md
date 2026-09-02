---
type: Model
title: North Mini Code
creator: Cohere
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0
output_speed_tps: 101.0
context_window: 256000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 38.0, z: -0.12, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 31.6, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 56.5, z: 0.42, r: 56.2, estimated: false }  # 코딩
  agentic: { s: 24.8, z: -0.48, r: 42.7, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.42, r: 43.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.4, z: -0.2, r: 47.0, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.51, r: 57.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — North Mini Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# North Mini Code

Cohere · Open · Small(30B) · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 101.0 t/s · TTFT 0.34s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.3 | -0.12 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 56.2 | +0.42 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 42.7 | -0.48 | 실측 | [[gdpval]] 2.0%×1.0, [[tau2-bench]] 37.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 43.7 | -0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.0 | -0.2 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 57.6 | +0.51 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
