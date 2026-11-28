---
type: Model
title: GPT-5.6 Sol (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 104.032407995751
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.9, z: 0.39, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.17, r: 52.6, estimated: false }  # 추론
  coding: { s: 67.0, z: 0.88, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.29, r: 54.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.6, z: 0.26, r: 54.0, estimated: false }  # 멀티모달
  long_context: { s: 70.3, z: 0.39, r: 55.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.6 Sol (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 104.032407995751 t/s · TTFT 1.89566585603053s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.39 | 실측 | [[gpqa-diamond]] 78.9899%×0.4, [[humanitys-last-exam]] 16.6821%×0.3 |
| 추론 | 52.6 | +0.17 | 실측 | [[critpt]] 5.14286%×1.0, [[gpqa-diamond]] 78.9899%×1.0, [[humanitys-last-exam]] 16.6821%×1.0 |
| 코딩 | 63.1 | +0.88 | 실측 | [[scicode]] 47.6852%×1.0 |
| 에이전트 | 54.3 | +0.29 | 실측 | [[gdpval]] 1250.4 Elo×1.0, [[tau3-banking]] 19.5876%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.0 | +0.26 | 실측 | [[mmmu-pro]] 71.9075%×1.0 |
| 긴문맥 | 55.8 | +0.39 | 실측 | [[aa-lcr]] 62.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
