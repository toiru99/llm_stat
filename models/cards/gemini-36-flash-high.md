---
type: Model
title: Gemini 3.6 Flash (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.63
output_speed_tps: 150.800705256409
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.1, z: 1.52, r: 72.9, estimated: false }  # 전문 지식
  reasoning: { s: 60.0, z: 1.23, r: 68.5, estimated: false }  # 추론
  coding: { s: 76.4, z: 1.19, r: 67.9, estimated: false }  # 코딩
  agentic: { s: 66.4, z: 0.68, r: 60.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.7, z: 1.04, r: 65.5, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemini 3.6 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.63/1M · 150.800705256409 t/s · TTFT 12.4930394024611s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.9 | +1.52 | 실측 | [[gpqa-diamond]] 92.8283%×0.4, [[humanitys-last-exam]] 40.8248%×0.3 |
| 추론 | 68.5 | +1.23 | 실측 | [[critpt]] 10.5714%×1.0, [[gpqa-diamond]] 92.8283%×1.0, [[humanitys-last-exam]] 40.8248%×1.0 |
| 코딩 | 67.9 | +1.19 | 실측 | [[scicode]] 53.3565%×1.0 |
| 에이전트 | 60.2 | +0.68 | 실측 | [[gdpval]] 1292.67 Elo×1.0, [[tau3-banking]] 29.8969%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.5 | +1.04 | 실측 | [[mmmu-pro]] 83.237%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
