---
type: Model
title: Grok 4.7 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 35.2122962959703
price_blended_usd_1m: 1.35
output_speed_tps: 79.9438140433399
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.46, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 53.4, z: 0.9, r: 63.6, estimated: false }  # 추론
  coding: { s: 83.6, z: 1.44, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 93.4, z: 1.63, r: 74.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Grok 4.7 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **35.2122962959703**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 79.9438140433399 t/s · TTFT 38.1982722665139s · 500k ctx` · 가성비 26.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.46 | 실측 | [[humanitys-last-exam]] 42.3077%×0.3 |
| 추론 | 63.6 | +0.9 | 실측 | [[critpt]] 18%×1.0, [[humanitys-last-exam]] 42.3077%×1.0 |
| 코딩 | 71.5 | +1.44 | 실측 | [[scicode]] 57.7546%×1.0 |
| 에이전트 | 74.5 | +1.63 | 실측 | [[gdpval]] 1717.57 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 77%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
