---
type: Model
title: GLM-5.3-Flash
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.101
output_speed_tps: 74.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.7, z: 1.42, r: 71.2, estimated: false }  # 전문 지식
  reasoning: { s: 64.2, z: 0.83, r: 62.4, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.27, r: 69.0, estimated: false }  # 코딩
  agentic: { s: 90.5, z: 1.93, r: 79.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 65.3, z: 0.53, r: 57.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GLM-5.3-Flash

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.101/1M · 74.0 t/s · TTFT 2.13s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.2 | +1.42 | 실측 | [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 62.4 | +0.83 | 실측 | [[critpt]] 24.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 69.0 | +1.27 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 79.0 | +1.93 | 실측 | [[gdpval]] 1649.0%×1.0, [[itbench]] 51.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 57.9 | +0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
