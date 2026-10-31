---
type: Model
title: Ling 3.1 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.192
output_speed_tps: 213.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.3, z: 0.61, r: 59.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.3, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 87.1, z: 1.82, r: 77.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 60.7, z: 0.34, r: 55.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Ling 3.1 Flash

InclusionAI · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · 213.0 t/s · TTFT 1.9s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.2 | +0.61 | 실측 | [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 77.3 | +1.82 | 실측 | [[gdpval]] 1626.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 55.0 | +0.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
