---
type: Model
title: Command A+
creator: Cohere
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 192000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.7, z: 0.09, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.1, z: -0.56, r: 41.5, estimated: false }  # 추론
  coding: { s: 48.2, z: 0.36, r: 55.5, estimated: false }  # 코딩
  agentic: { s: 25.9, z: -0.29, r: 45.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.9, z: -0.33, r: 45.0, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.21, r: 53.2, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.44, r: 71.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command A+
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-06
timestamp: 2026-11-06T00:00:00Z
---

# Command A+

Cohere · Open · Large · 컨텍스트 192k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 192k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.09 | 실측 | [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 41.5 | -0.56 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 55.5 | +0.36 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 45.6 | -0.29 | 실측 | [[gdpval]] 522.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.0 | -0.33 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 53.2 | +0.21 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 71.5 | +1.44 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
