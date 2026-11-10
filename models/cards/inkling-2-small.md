---
type: Model
title: Inkling 2 Small
creator: Thinking Machines
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.181
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.7, z: 0.57, r: 58.5, estimated: false }  # 전문 지식
  reasoning: { s: 52.2, z: 0.44, r: 56.6, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 83.0, z: 1.63, r: 74.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.5, z: 0.96, r: 64.5, estimated: false }  # 멀티모달
  long_context: { s: 93.9, z: 1.22, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 56.8, z: 0.17, r: 52.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling 2 Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Inkling 2 Small

Thinking Machines · Proprietary · Large · 컨텍스트 1M · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $1.0 · 혼합 $0.181/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 171.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.5 | +0.57 | 실측 | [[humanitys-last-exam]] 44.1%×0.3 |
| 추론 | 56.6 | +0.44 | 실측 | [[critpt]] 35.0%×1.0, [[humanitys-last-exam]] 44.1%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[scicode]] 52.3%×1.0 |
| 에이전트 | 74.5 | +1.63 | 실측 | [[gdpval]] 1630.0%×1.0, [[tau3-banking]] 40.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.5 | +0.96 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.4 | +1.22 | 실측 | [[aa-lcr]] 83.3%×1.0 |
| 지시 따르기 | 52.6 | +0.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
