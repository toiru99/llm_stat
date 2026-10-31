---
type: Model
title: GPT-5.6 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 94.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.3, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 46.1, z: 0.02, r: 50.3, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.88, r: 63.2, estimated: false }  # 코딩
  agentic: { s: 45.3, z: 0.38, r: 55.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 71.2, z: -0.04, r: 49.4, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.42, r: 56.3, estimated: false }  # 긴문맥
  instruction: { s: 54.1, z: 0.06, r: 50.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-5.6 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 94.0 t/s · TTFT 0.84s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.3 | +0.02 | 실측 | [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 63.2 | +0.88 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 55.7 | +0.38 | 실측 | [[gdpval]] 1105.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.4 | -0.04 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 56.3 | +0.42 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 50.9 | +0.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
