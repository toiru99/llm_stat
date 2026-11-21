---
type: Model
title: Muse Spark 1.3 (max)
creator: Meta
license: Proprietary
intelligence_index: 36.6172039139368
price_blended_usd_1m: 0.78
output_speed_tps: 96.8175300947538
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.2, z: 1.73, r: 76.0, estimated: false }  # 전문 지식
  reasoning: { s: 77.2, z: 2.05, r: 80.8, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.54, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 95.1, z: 1.74, r: 76.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 82.7, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Muse Spark 1.3 (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.6172039139368** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 96.8175300947538 t/s · TTFT 33.59712733746s · 1M ctx` · 가성비 46.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.0 | +1.73 | 실측 | [[gpqa-diamond]] 93.53535353535351%×0.4, [[humanitys-last-exam]] 48.7025023169602%×0.3 |
| 추론 | 80.8 | +2.05 | 실측 | [[critpt]] 24.8571428571429%×1.0, [[gpqa-diamond]] 93.53535353535351%×1.0, [[humanitys-last-exam]] 48.7025023169602%×1.0 |
| 코딩 | 73.0 | +1.54 | 실측 | [[scicode]] 58.796296296296305%×1.0 |
| 에이전트 | 76.0 | +1.74 | 실측 | [[gdpval]] 1680.99%×1.0, [[tau3-banking]] 50.51546391752581%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
