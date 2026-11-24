---
type: Model
title: Gemini 3.7 Flash (low)
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
  knowledge: { s: 73.0, z: 1.28, r: 69.1, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.83, r: 62.4, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 66.8, z: 0.69, r: 60.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.8, z: 1.15, r: 67.2, estimated: false }  # 멀티모달
  long_context: { s: 88.7, z: 0.95, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3.7 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.1 | +1.28 | 실측 | [[gpqa-diamond]] 90.101%×0.4, [[humanitys-last-exam]] 35.1251%×0.3 |
| 추론 | 62.4 | +0.83 | 실측 | [[critpt]] 5.71429%×1.0, [[gpqa-diamond]] 90.101%×1.0, [[humanitys-last-exam]] 35.1251%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 55.6713%×1.0 |
| 에이전트 | 60.4 | +0.69 | 실측 | [[gdpval]] 1327.54 Elo×1.0, [[tau3-banking]] 29.4845%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.2 | +1.15 | 실측 | [[mmmu-pro]] 84.8555%×1.0 |
| 긴문맥 | 64.2 | +0.95 | 실측 | [[aa-lcr]] 78.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
