---
type: Model
title: GPT-6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.54
output_speed_tps: 90.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.7, r: 75.4, estimated: false }  # 전문 지식
  reasoning: { s: 81.2, z: 2.03, r: 80.5, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 71.6, z: 1.25, r: 68.8, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.64, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 82.7, z: 1.18, r: 67.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# GPT-6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 90.0 t/s · TTFT 50.76s · 1M ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.4 | +1.7 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 80.5 | +2.03 | 실측 | [[critpt]] 28.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 68.8 | +1.25 | 실측 | [[gdpval]] 48.0%×1.0 |
| 신뢰성 | 59.5 | +0.64 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 66.3 | +1.09 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 67.8 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
