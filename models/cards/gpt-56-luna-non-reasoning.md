---
type: Model
title: GPT-5.6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 114.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.8, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 37.0, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 34.7, z: 0.02, r: 50.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.6, z: -0.52, r: 42.2, estimated: false }  # 멀티모달
  long_context: { s: 48.3, z: -0.12, r: 48.2, estimated: false }  # 긴문맥
  instruction: { s: 50.1, z: -0.11, r: 48.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GPT-5.6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 114.0 t/s · TTFT 0.8s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 50.2 | +0.02 | 실측 | [[gdpval]] 928.0%×1.0, [[tau3-banking]] 10.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.2 | -0.52 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 48.2 | -0.12 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 48.4 | -0.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
