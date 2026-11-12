---
type: Model
title: GPT-4o mini
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -1.13, r: 33.0, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -1.08, r: 33.8, estimated: false }  # 추론
  coding: { s: 3.9, z: -1.13, r: 33.1, estimated: true }  # 코딩
  agentic: { s: 3.0, z: -1.08, r: 33.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 36.5, z: -1.77, r: 23.5, estimated: false }  # 멀티모달
  long_context: { s: 16.6, z: -1.09, r: 33.6, estimated: true }  # 긴문맥
  instruction: { s: 26.5, z: -1.13, r: 33.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GPT-4o mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1425/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.13 | 실측 | [[gpqa-diamond]] 42.6%×0.4, [[humanitys-last-exam]] 4.2%×0.3 |
| 추론 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 42.6%×1.0, [[humanitys-last-exam]] 4.2%×1.0 |
| 코딩 | 33.1 | -1.13 | 추정 | (추정) |
| 에이전트 | 33.9 | -1.08 | 실측 | [[gdpval]] 15.0%×1.0, [[tau3-banking]] 2.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 23.5 | -1.77 | 실측 | [[mmmu-pro]] 42.0%×1.0 |
| 긴문맥 | 33.6 | -1.09 | 추정 | (추정) |
| 지시 따르기 | 33.1 | -1.13 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
