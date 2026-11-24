---
type: Model
title: Gemini 4 Argon (medium)
creator: Google
license: Proprietary
intelligence_index: 47.6040598289046
price_blended_usd_1m: 2.94
output_speed_tps: 68.9497701760427
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.7, z: 0.97, r: 64.5, estimated: false }  # 전문 지식
  reasoning: { s: 65.8, z: 1.52, r: 72.8, estimated: false }  # 추론
  coding: { s: 85.5, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 87.3, z: 1.42, r: 71.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 98.5, z: 1.38, r: 70.7, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 4 Argon (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 4 Argon (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.6040598289046**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 68.9497701760427 t/s · TTFT 11.0736207912378s · 1M ctx` · 가성비 16.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.5 | +0.97 | 실측 | [[humanitys-last-exam]] 49.9073%×0.3 |
| 추론 | 72.8 | +1.52 | 실측 | [[critpt]] 23.1429%×1.0, [[humanitys-last-exam]] 49.9073%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 58.912%×1.0 |
| 에이전트 | 71.3 | +1.42 | 실측 | [[gdpval]] 1577.96 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.7 | +1.38 | 실측 | [[mmmu-pro]] 88.3237%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
