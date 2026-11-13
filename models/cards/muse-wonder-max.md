---
type: Model
title: Muse Wonder (max)
creator: Meta
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.9, z: 0.95, r: 64.3, estimated: false }  # 전문 지식
  reasoning: { s: 66.5, z: 1.13, r: 66.9, estimated: false }  # 추론
  coding: { s: 87.8, z: 1.67, r: 75.1, estimated: false }  # 코딩
  agentic: { s: 94.9, z: 2.02, r: 80.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 74.8, z: 0.93, r: 64.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Muse Wonder (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 15.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.3 | +0.95 | 실측 | [[humanitys-last-exam]] 50.1%×0.3 |
| 추론 | 66.9 | +1.13 | 실측 | [[critpt]] 50.5%×1.0, [[humanitys-last-exam]] 50.1%×1.0 |
| 코딩 | 75.1 | +1.67 | 실측 | [[scicode]] 60.3%×1.0 |
| 에이전트 | 80.4 | +2.02 | 실측 | [[gdpval]] 1770.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 80.7%×1.0 |
| 지시 따르기 | 64.0 | +0.93 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
