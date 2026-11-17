---
type: Model
title: Solar Mini 4
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 136.19075680700266
context_window: 1048576
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.7, z: -0.65, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 18.9, z: -0.82, r: 37.8, estimated: false }  # 추론
  coding: { s: 66.9, z: 0.92, r: 63.9, estimated: false }  # 코딩
  agentic: { s: 65.9, z: 0.74, r: 61.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 51.0, z: -0.11, r: 48.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Solar Mini 4

Upstage · Proprietary · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 136.19075680700266 t/s · TTFT 2.122896945290272s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.65 | 실측 | [[humanitys-last-exam]] 25.7645968489342%×0.3 |
| 추론 | 37.8 | -0.82 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[humanitys-last-exam]] 25.7645968489342%×1.0 |
| 코딩 | 63.9 | +0.92 | 실측 | [[scicode]] 47.5694444444444%×1.0 |
| 에이전트 | 61.1 | +0.74 | 실측 | [[gdpval]] 1092.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.3333333333333%×1.0 |
| 지시 따르기 | 48.4 | -0.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
