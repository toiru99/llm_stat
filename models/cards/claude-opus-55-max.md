---
type: Model
title: Claude Opus 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 59.1249717392035
price_blended_usd_1m: 2.94
output_speed_tps: 116.922991272957
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.3, z: 1.73, r: 75.9, estimated: false }  # 전문 지식
  reasoning: { s: 85.6, z: 2.5, r: 87.6, estimated: false }  # 추론
  coding: { s: 98.7, z: 1.94, r: 79.1, estimated: false }  # 코딩
  agentic: { s: 100.0, z: 1.87, r: 78.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.6, z: 1.34, r: 70.1, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Opus 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.1249717392035**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 116.922991272957 t/s · TTFT 337.809683193142s · 1M ctx` · 가성비 20.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 75.9 | +1.73 | 실측 | [[humanitys-last-exam]] 61.3531%×0.3 |
| 추론 | 87.6 | +2.5 | 실측 | [[critpt]] 31.7143%×1.0, [[humanitys-last-exam]] 61.3531%×1.0 |
| 코딩 | 79.1 | +1.94 | 실측 | [[scicode]] 66.8981%×1.0 |
| 에이전트 | 78.0 | +1.87 | 실측 | [[gdpval]] 1866.27 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.1 | +1.34 | 실측 | [[mmmu-pro]] 87.6879%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 84.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
