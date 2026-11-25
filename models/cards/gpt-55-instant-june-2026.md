---
type: Model
title: GPT-5.5 Instant (June 2026)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 120.547132690628
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.0, z: 0.59, r: 58.9, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: 0.07, r: 51.0, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.15, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 31.5, z: -0.55, r: 41.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.65, r: 59.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (June 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5.5 Instant (June 2026)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 120.547132690628 t/s · TTFT 1.89715313820296s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.9 | +0.59 | 실측 | [[gpqa-diamond]] 82.3232%×0.4, [[humanitys-last-exam]] 19.9259%×0.3 |
| 추론 | 51.0 | +0.07 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 82.3232%×1.0, [[humanitys-last-exam]] 19.9259%×1.0 |
| 코딩 | 67.2 | +1.15 | 실측 | [[scicode]] 52.5463%×1.0 |
| 에이전트 | 41.8 | -0.55 | 실측 | [[gdpval]] 515.93 Elo×1.0, [[tau3-banking]] 11.7526%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.8 | +0.65 | 실측 | [[aa-lcr]] 70%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
