---
type: Model
title: Gemini 3.7 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.6, z: 1.45, r: 71.7, estimated: false }  # 전문 지식
  reasoning: { s: 57.8, z: 1.12, r: 66.9, estimated: false }  # 추론
  coding: { s: 87.0, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 73.5, z: 0.93, r: 64.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.7, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3.7 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 71.7 | +1.45 | 실측 | [[gpqa-diamond]] 92.1212%×0.4, [[humanitys-last-exam]] 38.9713%×0.3 |
| 추론 | 66.9 | +1.12 | 실측 | [[critpt]] 9.42857%×1.0, [[gpqa-diamond]] 92.1212%×1.0, [[humanitys-last-exam]] 38.9713%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 59.838%×1.0 |
| 에이전트 | 64.0 | +0.93 | 실측 | [[gdpval]] 1369.08 Elo×1.0, [[tau3-banking]] 35.4639%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 84.7399%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
