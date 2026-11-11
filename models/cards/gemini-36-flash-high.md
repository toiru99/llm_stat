---
type: Model
title: Gemini 3.6 Flash (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.63
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.1, z: 1.5, r: 72.5, estimated: false }  # 전문 지식
  reasoning: { s: 75.1, z: 1.57, r: 73.5, estimated: false }  # 추론
  coding: { s: 76.5, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 63.8, z: 0.98, r: 64.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.9, z: 1.03, r: 65.5, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 86.1, z: 1.43, r: 71.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Gemini 3.6 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.63/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.5 | +1.5 | 실측 | [[gpqa-diamond]] 92.8%×0.4, [[humanitys-last-exam]] 40.8%×0.3 |
| 추론 | 73.5 | +1.57 | 실측 | [[gpqa-diamond]] 92.8%×1.0, [[humanitys-last-exam]] 40.8%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 53.4%×1.0 |
| 에이전트 | 64.7 | +0.98 | 실측 | [[gdpval]] 1295.0%×1.0, [[tau3-banking]] 29.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.5 | +1.03 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 71.5 | +1.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
