---
type: Model
title: Solar Mini 4
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.7, z: -0.64, r: 40.4, estimated: false }  # 전문 지식
  reasoning: { s: 33.7, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 66.9, z: 0.97, r: 64.6, estimated: false }  # 코딩
  agentic: { s: 58.5, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.9, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 44.1, z: -0.38, r: 44.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Solar Mini 4

Upstage · Proprietary · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.4 | -0.64 | 실측 | [[humanitys-last-exam]] 25.8%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[humanitys-last-exam]] 25.8%×1.0 |
| 코딩 | 64.6 | +0.97 | 실측 | [[scicode]] 47.6%×1.0 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[gdpval]] 1092.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 83.3%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
