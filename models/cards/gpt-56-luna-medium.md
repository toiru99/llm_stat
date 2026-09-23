---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0.174
output_speed_tps: 127.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 48.6, z: 0.6, r: 59.0, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 40.8, z: 0.11, r: 51.7, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.66, r: 59.9, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.74, r: 61.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 127.0 t/s · TTFT 2.64s · 1M ctx` · 가성비 143.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 59.0 | +0.6 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 51.7 | +0.11 | 실측 | [[gdpval]] 31.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 59.9 | +0.66 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
