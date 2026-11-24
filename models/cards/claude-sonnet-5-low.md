---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 95.4220618299249
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 28.5, z: -0.89, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 20.6, z: -0.72, r: 39.2, estimated: false }  # 추론
  coding: { s: 71.0, z: 1.01, r: 65.2, estimated: false }  # 코딩
  agentic: { s: 65.1, z: 0.64, r: 59.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 95.4220618299249 t/s · TTFT 2.02658130216246s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.89 | 실측 | [[humanitys-last-exam]] 21.9184%×0.3 |
| 추론 | 39.2 | -0.72 | 실측 | [[critpt]] 4.57143%×1.0, [[humanitys-last-exam]] 21.9184%×1.0 |
| 코딩 | 65.2 | +1.01 | 실측 | [[scicode]] 50.1157%×1.0 |
| 에이전트 | 59.5 | +0.64 | 실측 | [[gdpval]] 1075.06 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 67.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
