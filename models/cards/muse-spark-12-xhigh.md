---
type: Model
title: Muse Spark 1.2 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.78
output_speed_tps: 204.504177809459
context_window: 1048576
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.54, r: 73.1, estimated: false }  # 전문 지식
  reasoning: { s: 67.8, z: 1.59, r: 73.8, estimated: false }  # 추론
  coding: { s: 83.0, z: 1.46, r: 71.9, estimated: false }  # 코딩
  agentic: { s: 75.3, z: 1.05, r: 65.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 74.8, z: 0.87, r: 63.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Muse Spark 1.2 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 204.504177809459 t/s · TTFT 7.11174080021396s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.1 | +1.54 | 실측 | [[gpqa-diamond]] 90.4040404040404%×0.4, [[humanitys-last-exam]] 45.458758109360495%×0.3 |
| 추론 | 73.8 | +1.59 | 실측 | [[critpt]] 17.714285714285698%×1.0, [[gpqa-diamond]] 90.4040404040404%×1.0, [[humanitys-last-exam]] 45.458758109360495%×1.0 |
| 코딩 | 71.9 | +1.46 | 실측 | [[scicode]] 57.4074074074074%×1.0 |
| 에이전트 | 65.8 | +1.05 | 실측 | [[gdpval]] 1477.77%×1.0, [[tau3-banking]] 34.8453608247423%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 63.1 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
