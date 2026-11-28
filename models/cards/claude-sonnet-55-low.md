---
type: Model
title: Claude Sonnet 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 25.599199499284
price_blended_usd_1m: 1.47
output_speed_tps: 135.777846972253
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.0, z: 0.06, r: 50.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.0, z: 0.24, r: 53.6, estimated: false }  # 추론
  coding: { s: 69.3, z: 0.95, r: 64.3, estimated: false }  # 코딩
  agentic: { s: 69.9, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Sonnet 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.599199499284**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 135.777846972253 t/s · TTFT 3.50887783321416s · 1M ctx` · 가성비 17.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.9 | +0.06 | 실측 | [[humanitys-last-exam]] 36.2373%×0.3 |
| 추론 | 53.6 | +0.24 | 실측 | [[critpt]] 11.4286%×1.0, [[humanitys-last-exam]] 36.2373%×1.0 |
| 코딩 | 64.3 | +0.95 | 실측 | [[scicode]] 49.0741%×1.0 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[gdpval]] 1182.36 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 76%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
