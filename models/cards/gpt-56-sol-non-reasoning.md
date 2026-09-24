---
type: Model
title: GPT-5.6 Sol (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 3.08
output_speed_tps: 67.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 66.6, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 40.8, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.16, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 46.5, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.96, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.58, r: 58.7, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.41, r: 56.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# GPT-5.6 Sol (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 67.0 t/s · TTFT 1.18s · 1M ctx` · 가성비 9.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 67.3 | +1.16 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 55.1 | +0.34 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 35.7 | -0.96 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 58.7 | +0.58 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 56.2 | +0.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
