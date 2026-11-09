---
type: Model
title: Muse Spark 1.1 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.78
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.9, z: 1.57, r: 73.6, estimated: false }  # 전문 지식
  reasoning: { s: 83.6, z: 1.72, r: 75.7, estimated: false }  # 추론
  coding: { s: 86.5, z: 1.64, r: 74.5, estimated: false }  # 코딩
  agentic: { s: 63.5, z: 1.0, r: 65.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 84.8, z: 1.36, r: 70.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Muse Spark 1.1 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.6 | +1.57 | 실측 | [[gpqa-diamond]] 89.8%×0.4, [[humanitys-last-exam]] 46.2%×0.3 |
| 추론 | 75.7 | +1.72 | 실측 | [[gpqa-diamond]] 89.8%×1.0, [[humanitys-last-exam]] 46.2%×1.0 |
| 코딩 | 74.5 | +1.64 | 실측 | [[scicode]] 58.8%×1.0 |
| 에이전트 | 65.0 | +1.0 | 실측 | [[gdpval]] 1217.0%×1.0, [[tau3-banking]] 31.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 77.7%×1.0 |
| 지시 따르기 | 70.3 | +1.36 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
