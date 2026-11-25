---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 101.281667579128
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 39.5, z: -0.35, r: 44.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 69.1, z: 0.78, r: 61.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 101.281667579128 t/s · TTFT 3.11162563811853s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.7 | -0.35 | 실측 | [[humanitys-last-exam]] 29.9815%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[critpt]] 8.57143%×1.0, [[humanitys-last-exam]] 29.9815%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 51.6204%×1.0 |
| 에이전트 | 61.7 | +0.78 | 실측 | [[gdpval]] 1166.03 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 73.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
