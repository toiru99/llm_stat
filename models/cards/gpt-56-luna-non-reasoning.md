---
type: Model
title: GPT-5.6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.39, r: 44.1, estimated: false }  # 전문 지식
  reasoning: { s: 36.7, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 55.8, z: 0.62, r: 59.2, estimated: false }  # 코딩
  agentic: { s: 34.1, z: -0.01, r: 49.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.8, z: -0.53, r: 42.0, estimated: false }  # 멀티모달
  long_context: { s: 48.1, z: -0.14, r: 48.0, estimated: false }  # 긴문맥
  instruction: { s: 49.9, z: -0.13, r: 48.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-5.6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.1 | -0.39 | 실측 | [[gpqa-diamond]] 64.5%×0.4, [[humanitys-last-exam]] 7.2%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[gpqa-diamond]] 64.5%×1.0, [[humanitys-last-exam]] 7.2%×1.0 |
| 코딩 | 59.2 | +0.62 | 실측 | [[scicode]] 40.4%×1.0 |
| 에이전트 | 49.9 | -0.01 | 실측 | [[gdpval]] 928.0%×1.0, [[tau3-banking]] 9.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.0 | -0.53 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 48.0 | -0.14 | 실측 | [[aa-lcr]] 42.7%×1.0 |
| 지시 따르기 | 48.1 | -0.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
