---
type: Model
title: GPT-5.6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.2, z: 1.26, r: 68.9, estimated: false }  # 전문 지식
  reasoning: { s: 75.9, z: 1.35, r: 70.2, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.15, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 66.2, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.5, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-05
timestamp: 2026-11-05T00:00:00Z
---

# GPT-5.6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.9 | +1.26 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 70.2 | +1.35 | 실측 | [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 67.3 | +1.15 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[gdpval]] 1408.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.5 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
