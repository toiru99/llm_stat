---
type: Model
title: GPT-5.6 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 1.74
output_speed_tps: 115.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 53.2, z: 0.46, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.8, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.86, r: 62.9, estimated: false }  # 코딩
  agentic: { s: 45.3, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.1, r: 33.6, estimated: false }  # 신뢰성
  multimodal: { s: 71.2, z: -0.05, r: 49.3, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.4, r: 56.0, estimated: false }  # 긴문맥
  instruction: { s: 58.6, z: 0.18, r: 52.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-5.6 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 115.0 t/s · TTFT 0.77s · 1M ctx` · 가성비 12.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.46 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 62.9 | +0.86 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[gdpval]] 1105.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 33.6 | -1.1 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | 49.3 | -0.05 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 56.0 | +0.4 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 52.6 | +0.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
