---
type: Model
title: GPT-6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: None
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.5, z: 0.38, r: 55.6, estimated: false }  # 전문 지식
  reasoning: { s: 61.6, z: 1.32, r: 69.7, estimated: false }  # 추론
  coding: { s: 77.1, z: 1.22, r: 68.3, estimated: false }  # 코딩
  agentic: { s: 77.2, z: 1.06, r: 65.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.9, z: 0.84, r: 62.6, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.6 | +0.38 | 실측 | [[humanitys-last-exam]] 40.9639%×0.3 |
| 추론 | 69.7 | +1.32 | 실측 | [[critpt]] 24.5714%×1.0, [[humanitys-last-exam]] 40.9639%×1.0 |
| 코딩 | 68.3 | +1.22 | 실측 | [[scicode]] 53.8194%×1.0 |
| 에이전트 | 65.9 | +1.06 | 실측 | [[gdpval]] 1349.41 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.6 | +0.84 | 실측 | [[mmmu-pro]] 80.4046%×1.0 |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
