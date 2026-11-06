---
type: Model
title: North Mini Code
creator: Cohere
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.06, r: 50.9, estimated: false }  # 전문 지식
  reasoning: { s: 31.6, z: -0.63, r: 40.5, estimated: false }  # 추론
  coding: { s: 51.2, z: 0.47, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.31, r: 45.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.6, z: -0.33, r: 45.1, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.49, r: 57.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — North Mini Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-06
timestamp: 2026-11-06T00:00:00Z
---

# North Mini Code

Cohere · Open · Small · 컨텍스트 256k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.9 | +0.06 | 실측 | [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 40.5 | -0.63 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 57.0 | +0.47 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 45.3 | -0.31 | 실측 | [[gdpval]] 319.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.1 | -0.33 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 57.4 | +0.49 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
