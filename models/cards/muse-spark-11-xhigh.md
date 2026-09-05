---
type: Model
title: Muse Spark 1.1 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 0.78
output_speed_tps: None
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.2, z: 1.94, r: 79.1, estimated: false }  # 전문 지식
  reasoning: { s: 72.5, z: 1.8, r: 77.0, estimated: false }  # 추론
  coding: { s: 81.0, z: 1.72, r: 75.8, estimated: true }  # 코딩
  agentic: { s: 62.5, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: 49.5, z: 1.18, r: 67.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 80.6, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Muse Spark 1.1 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 55.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.1 | +1.94 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 77.0 | +1.8 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 75.8 | +1.72 | 추정 | (추정) |
| 에이전트 | 64.4 | +0.96 | 실측 | [[gdpval]] 40.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 67.8 | +1.18 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
