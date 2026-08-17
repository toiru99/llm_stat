---
type: Model
title: North Mini Code
creator: Cohere
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0
output_speed_tps: 28.0
context_window: 256000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 38.1, z: -0.15, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 32.1, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 57.9, z: 0.4, r: 55.9, estimated: false }  # 코딩
  agentic: { s: 24.8, z: -0.47, r: 43.0, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.43, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.4, z: -0.21, r: 46.8, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.43, r: 56.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — North Mini Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# North Mini Code

Cohere · Open · Small(30B) · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 28.0 t/s · TTFT 0.45s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.15 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 55.9 | +0.4 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 43.0 | -0.47 | 실측 | [[gdpval]] 2.0%×1.0, [[tau2-bench]] 37.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.8 | -0.21 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 56.4 | +0.43 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
