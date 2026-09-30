---
type: Model
title: Muse Spark 1.2 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.78
output_speed_tps: 231.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.3, z: 1.49, r: 72.3, estimated: false }  # 전문 지식
  reasoning: { s: 74.2, z: 1.73, r: 76.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.63, r: 74.4, estimated: false }  # 코딩
  agentic: { s: 70.9, z: 1.25, r: 68.7, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 1.91, r: 78.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 74.5, z: 0.85, r: 62.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Muse Spark 1.2 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 231.0 t/s · TTFT 12.14s · 1M ctx` · 가성비 51.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.3 | +1.49 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 76.0 | +1.73 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 74.4 | +1.63 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 68.7 | +1.25 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 78.6 | +1.91 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 62.8 | +0.85 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
