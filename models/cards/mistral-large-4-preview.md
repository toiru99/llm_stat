---
type: Model
title: Mistral Large 4 Preview
creator: Mistral
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.788
output_speed_tps: 116.0
context_window: 524000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.9, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 45.0, z: 0.35, r: 55.3, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.37, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 76.8, z: 1.45, r: 71.8, estimated: false }  # 에이전트
  trust: { s: 57.7, z: 1.38, r: 70.7, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 62.4, z: 0.34, r: 55.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Mistral Large 4 Preview

Mistral · Proprietary · Large · 컨텍스트 524k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.36 · 출력 $4.18 · 혼합 $0.788/1M · 116.0 t/s · TTFT 1.55s · 524k ctx` · 가성비 48.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 55.3 | +0.35 | 실측 | [[critpt]] 11.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 70.5 | +1.37 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 71.8 | +1.45 | 실측 | [[gdpval]] 1434.0%×1.0 |
| 신뢰성 | 70.7 | +1.38 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 55.1 | +0.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
