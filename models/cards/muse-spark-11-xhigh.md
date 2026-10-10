---
type: Model
title: Muse Spark 1.1 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.78
output_speed_tps: 93.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.8, z: 1.77, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 71.6, z: 1.59, r: 73.8, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.7, r: 75.5, estimated: false }  # 코딩
  agentic: { s: 57.8, z: 0.72, r: 60.8, estimated: false }  # 에이전트
  trust: { s: 49.5, z: 1.05, r: 65.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 79.4, z: 1.04, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Muse Spark 1.1 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 93.0 t/s · TTFT 64.9s · 1M ctx` · 가성비 43.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.77 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 73.8 | +1.59 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 75.5 | +1.7 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 60.8 | +0.72 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 65.8 | +1.05 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 65.7 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
