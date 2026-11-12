---
type: Model
title: Ling 3.1 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.192
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.3, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 77.6, z: 1.34, r: 70.1, estimated: false }  # 코딩
  agentic: { s: 87.1, z: 1.77, r: 76.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.22, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 58.9, z: 0.26, r: 54.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Ling 3.1 Flash

InclusionAI · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[humanitys-last-exam]] 39.4%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[humanitys-last-exam]] 39.4%×1.0 |
| 코딩 | 70.1 | +1.34 | 실측 | [[scicode]] 54.1%×1.0 |
| 에이전트 | 76.6 | +1.77 | 실측 | [[gdpval]] 1626.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.2 | +1.22 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 54.0 | +0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
