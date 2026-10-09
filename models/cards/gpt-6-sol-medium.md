---
type: Model
title: GPT-6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 1.54
output_speed_tps: None
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 72.4, z: 1.62, r: 74.3, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.42, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 61.8, z: 0.87, r: 63.0, estimated: false }  # 에이전트
  trust: { s: 42.3, z: 0.72, r: 60.8, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 83.2, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# GPT-6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 26.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 74.3 | +1.62 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 71.2 | +1.42 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 63.0 | +0.87 | 실측 | [[gdpval]] 42.0%×1.0 |
| 신뢰성 | 60.8 | +0.72 | 실측 | [[aa-omniscience]] 43.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
