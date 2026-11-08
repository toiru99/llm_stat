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
  knowledge: { s: 81.3, z: 1.41, r: 71.2, estimated: false }  # 전문 지식
  reasoning: { s: 75.7, z: 1.36, r: 70.4, estimated: false }  # 추론
  coding: { s: 89.0, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 94.9, z: 2.07, r: 81.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.16, r: 67.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Muse Wonder (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 15.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.2 | +1.41 | 실측 | [[humanitys-last-exam]] 50.1%×0.3 |
| 추론 | 70.4 | +1.36 | 실측 | [[critpt]] 50.5%×1.0, [[humanitys-last-exam]] 50.1%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 60.3%×1.0 |
| 에이전트 | 81.1 | +2.07 | 실측 | [[gdpval]] 1770.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.7%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
