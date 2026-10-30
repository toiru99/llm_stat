---
type: Model
title: Solar Mini 4
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 118.0
context_window: 1050000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.7, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 41.7, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.05, r: 65.7, estimated: false }  # 코딩
  agentic: { s: 58.5, z: 0.84, r: 62.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 45.4, z: -0.31, r: 45.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Solar Mini 4

Upstage · Proprietary · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 118.0 t/s · TTFT 1.83s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 65.7 | +1.05 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 62.5 | +0.84 | 실측 | [[gdpval]] 1092.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 45.4 | -0.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
