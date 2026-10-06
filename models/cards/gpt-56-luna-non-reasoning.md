---
type: Model
title: GPT-5.6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 16.0
price_blended_usd_1m: 0.174
output_speed_tps: 110.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.3, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.7, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 25.2, z: -0.52, r: 42.2, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.13, r: 48.0, estimated: false }  # 신뢰성
  multimodal: { s: 61.6, z: -0.49, r: 42.7, estimated: false }  # 멀티모달
  long_context: { s: 48.3, z: -0.1, r: 48.5, estimated: false }  # 긴문맥
  instruction: { s: 53.8, z: -0.02, r: 49.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GPT-5.6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **16.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 110.0 t/s · TTFT 0.78s · 1M ctx` · 가성비 92.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 42.2 | -0.52 | 실측 | [[gdpval]] 21.0%×1.0, [[tau3-banking]] 10.0%×1.0 |
| 신뢰성 | 48.0 | -0.13 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 42.7 | -0.49 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 48.5 | -0.1 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 49.7 | -0.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
