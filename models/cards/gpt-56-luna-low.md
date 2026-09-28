---
type: Model
title: GPT-5.6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 0.174
output_speed_tps: 120.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.91, r: 63.7, estimated: false }  # 전문 지식
  reasoning: { s: 42.4, z: 0.32, r: 54.8, estimated: false }  # 추론
  coding: { s: 65.0, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 30.7, z: -0.28, r: 45.9, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.82, r: 37.7, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.52, r: 57.9, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.85, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 70.8, z: 0.71, r: 60.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# GPT-5.6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 120.0 t/s · TTFT 1.58s · 1M ctx` · 가성비 120.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.7 | +0.91 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 54.8 | +0.32 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 45.9 | -0.28 | 실측 | [[gdpval]] 24.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 37.7 | -0.82 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 57.9 | +0.52 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 62.8 | +0.85 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 60.7 | +0.71 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
