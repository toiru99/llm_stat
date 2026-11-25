---
type: Model
title: Claude Opus 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 57.5154105625052
price_blended_usd_1m: 2.94
output_speed_tps: 110.061283913628
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.1, z: 1.47, r: 72.1, estimated: false }  # 전문 지식
  reasoning: { s: 82.9, z: 2.37, r: 85.6, estimated: false }  # 추론
  coding: { s: 95.6, z: 1.84, r: 77.6, estimated: false }  # 코딩
  agentic: { s: 98.7, z: 1.82, r: 77.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 96.1, z: 1.26, r: 69.0, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Opus 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.5154105625052**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 110.061283913628 t/s · TTFT 77.622746728107s · 1M ctx` · 가성비 19.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.1 | +1.47 | 실측 | [[humanitys-last-exam]] 57.507%×0.3 |
| 추론 | 85.6 | +2.37 | 실측 | [[critpt]] 31.7143%×1.0, [[humanitys-last-exam]] 57.507%×1.0 |
| 코딩 | 77.6 | +1.84 | 실측 | [[scicode]] 65.0463%×1.0 |
| 에이전트 | 77.3 | +1.82 | 실측 | [[gdpval]] 1835.95 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 69.0 | +1.26 | 실측 | [[mmmu-pro]] 86.5896%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 84.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
