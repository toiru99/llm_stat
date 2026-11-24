---
type: Model
title: Claude Sonnet 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 98.0421899237422
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.3, z: 0.03, r: 50.4, estimated: false }  # 전문 지식
  reasoning: { s: 44.9, z: 0.48, r: 57.2, estimated: false }  # 추론
  coding: { s: 77.9, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 73.4, z: 0.93, r: 63.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Sonnet 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 98.0421899237422 t/s · TTFT 6.5263173072042s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.03 | 실측 | [[humanitys-last-exam]] 35.7275%×0.3 |
| 추론 | 57.2 | +0.48 | 실측 | [[critpt]] 15.1429%×1.0, [[humanitys-last-exam]] 35.7275%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[scicode]] 54.2824%×1.0 |
| 에이전트 | 63.9 | +0.93 | 실측 | [[gdpval]] 1261.91 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 76.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
