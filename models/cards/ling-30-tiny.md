---
type: Model
title: Ling 3.0 Tiny
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 164.172509944659
context_window: 262144
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.9, z: -0.02, r: 49.7, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 28.4, z: -0.39, r: 44.1, estimated: false }  # 코딩
  agentic: { s: 41.5, z: -0.11, r: 48.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.43, r: 56.4, estimated: false }  # 긴문맥
  instruction: { s: 66.0, z: 0.51, r: 57.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Tiny
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Ling 3.0 Tiny

InclusionAI · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 164.172509944659 t/s · TTFT 3.75905112339763s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.7 | -0.02 | 실측 | [[gpqa-diamond]] 73.43434343434339%×0.4, [[humanitys-last-exam]] 9.31417979610751%×0.3 |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.43434343434339%×1.0, [[humanitys-last-exam]] 9.31417979610751%×1.0 |
| 코딩 | 44.1 | -0.39 | 실측 | [[scicode]] 24.1898148148148%×1.0 |
| 에이전트 | 48.3 | -0.11 | 실측 | [[gdpval]] 567.85%×1.0, [[tau3-banking]] 20.8247422680412%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.4 | +0.43 | 실측 | [[aa-lcr]] 60.33333333333331%×1.0 |
| 지시 따르기 | 57.6 | +0.51 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
