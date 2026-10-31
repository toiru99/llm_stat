---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 103.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.4, z: 0.84, r: 62.5, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.99, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 48.1, z: 0.48, r: 57.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 86.2, z: 1.4, r: 71.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 103.0 t/s · TTFT 2.89s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.5 | +0.84 | 실측 | [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 64.9 | +0.99 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 57.2 | +0.48 | 실측 | [[gdpval]] 1138.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 71.0 | +1.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
