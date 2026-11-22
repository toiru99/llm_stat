---
type: Model
title: Ling 3.1 Flash 1019
creator: InclusionAI
license: Open
intelligence_index: 29.570119369837
price_blended_usd_1m: 0.192
output_speed_tps: None
context_window: 1048576
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.9, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 65.4, z: 1.47, r: 72.0, estimated: false }  # 추론
  coding: { s: 82.1, z: 1.43, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 90.7, z: 1.58, r: 73.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 69.2, z: 0.64, r: 59.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash 1019
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Ling 3.1 Flash 1019

InclusionAI · Open · Large · 컨텍스트 1M · 종합지능 **29.570119369837**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 154.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[humanitys-last-exam]] 43.466172381835%×0.3 |
| 추론 | 72.0 | +1.47 | 실측 | [[critpt]] 26.0%×1.0, [[humanitys-last-exam]] 43.466172381835%×1.0 |
| 코딩 | 71.4 | +1.43 | 실측 | [[scicode]] 56.828703703703695%×1.0 |
| 에이전트 | 73.7 | +1.58 | 실측 | [[gdpval]] 1654.99%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 82.3333333333333%×1.0 |
| 지시 따르기 | 59.6 | +0.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
