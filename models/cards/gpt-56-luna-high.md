---
type: Model
title: GPT-5.6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 0.174
output_speed_tps: 109.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.9, z: 1.17, r: 67.5, estimated: false }  # 전문 지식
  reasoning: { s: 66.1, z: 1.34, r: 70.2, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 55.1, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.94, r: 35.9, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.74, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 79.9, z: 1.07, r: 66.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 109.0 t/s · TTFT 18.4s · 1M ctx` · 가성비 183.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.5 | +1.17 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 70.2 | +1.34 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[gdpval]] 41.0%×1.0, [[tau3-banking]] 25.0%×1.0 |
| 신뢰성 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 61.2 | +0.74 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
