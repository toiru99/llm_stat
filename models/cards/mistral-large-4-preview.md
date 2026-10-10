---
type: Model
title: Mistral Large 4 Preview
creator: Mistral
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.788
output_speed_tps: None
context_window: 524000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.9, z: 0.01, r: 50.2, estimated: false }  # 전문 지식
  reasoning: { s: 45.5, z: 0.4, r: 56.0, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.42, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 67.6, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: 57.7, z: 1.43, r: 71.5, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.61, r: 59.1, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 70.1, z: 0.66, r: 59.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Mistral Large 4 Preview

Mistral · Proprietary · Large · 컨텍스트 524k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.36 · 출력 $4.18 · 혼합 $0.788/1M · None t/s · TTFT Nones · 524k ctx` · 가성비 48.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.2 | +0.01 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 56.0 | +0.4 | 실측 | [[critpt]] 11.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 71.2 | +1.42 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[gdpval]] 46.0%×1.0 |
| 신뢰성 | 71.5 | +1.43 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 59.1 | +0.61 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 59.8 | +0.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
