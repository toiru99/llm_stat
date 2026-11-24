---
type: Model
title: GPT-4
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 8192
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.1, z: -0.86, r: 37.1, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.3, r: 45.5, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 17.2, z: -1.06, r: 34.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.87, r: 37.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-4

OpenAI · Proprietary · Unknown · 컨텍스트 8k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.1 | -0.86 | 실측 | [[gpqa-diamond]] 34.9495%×0.4 |
| 추론 | 45.5 | -0.3 | 실측 | [[gpqa-diamond]] 34.9495%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 34.2 | -1.06 | 실측 | [[gdpval]] -13.11 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 37.0 | -0.87 | 실측 | [[ifbench]] 33.1973%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
