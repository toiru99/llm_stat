---
type: Model
title: GLM-5.3-Flash
creator: Z AI
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.101
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.7, z: 1.41, r: 71.1, estimated: false }  # 전문 지식
  reasoning: { s: 64.6, z: 0.85, r: 62.7, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.26, r: 68.9, estimated: false }  # 코딩
  agentic: { s: 90.5, z: 1.92, r: 78.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 69.5, z: 0.69, r: 60.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# GLM-5.3-Flash

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.101/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 277.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.1 | +1.41 | 실측 | [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 62.7 | +0.85 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 68.9 | +1.26 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 78.9 | +1.92 | 실측 | [[gdpval]] 1649.0%×1.0, [[itbench]] 51.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 60.4 | +0.69 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
