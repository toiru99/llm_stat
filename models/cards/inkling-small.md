---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 12.9101620926084
price_blended_usd_1m: 0.222
output_speed_tps: 98.06257742971846
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.5, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 53.1, z: 0.88, r: 63.2, estimated: false }  # 추론
  coding: { s: 70.3, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 52.0, z: 0.26, r: 53.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.43, r: 56.4, estimated: false }  # 멀티모달
  long_context: { s: 85.3, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **12.9101620926084** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 98.06257742971846 t/s · TTFT 1.454485190427488s · 1M ctx` · 가성비 58.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[gpqa-diamond]] 89.49494949494951%×0.4, [[humanitys-last-exam]] 33.3178869323448%×0.3 |
| 추론 | 63.2 | +0.88 | 실측 | [[critpt]] 8.28571428571429%×1.0, [[gpqa-diamond]] 89.49494949494951%×1.0, [[humanitys-last-exam]] 33.3178869323448%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 49.6527777777778%×1.0 |
| 에이전트 | 53.8 | +0.26 | 실측 | [[gdpval]] 1132.8%×1.0, [[tau3-banking]] 18.7628865979381%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.4 | +0.43 | 실측 | [[mmmu-pro]] 74.0462427745665%×1.0 |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 75.6666666666667%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
