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
  knowledge: { s: 79.3, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 77.0, z: 1.66, r: 74.9, estimated: false }  # 추론
  coding: { s: 85.4, z: 1.6, r: 74.0, estimated: false }  # 코딩
  agentic: { s: 63.5, z: 0.97, r: 64.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.04, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: 82.1, z: 1.26, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
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
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 89.8%×0.4, [[humanitys-last-exam]] 46.2%×0.3 |
| 추론 | 74.9 | +1.66 | 실측 | [[gpqa-diamond]] 89.8%×1.0, [[humanitys-last-exam]] 46.2%×1.0 |
| 코딩 | 74.0 | +1.6 | 실측 | [[scicode]] 58.8%×1.0 |
| 에이전트 | 64.6 | +0.97 | 실측 | [[gdpval]] 1217.0%×1.0, [[tau3-banking]] 31.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.5 | +1.04 | 실측 | [[aa-lcr]] 77.7%×1.0 |
| 지시 따르기 | 69.0 | +1.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
