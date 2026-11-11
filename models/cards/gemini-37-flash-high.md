---
type: Model
title: Gemini 3.7 Flash (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.5775
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.4, z: 1.76, r: 76.4, estimated: false }  # 전문 지식
  reasoning: { s: 80.9, z: 1.85, r: 77.8, estimated: false }  # 추론
  coding: { s: 82.7, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 69.5, z: 1.18, r: 67.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 77.1, z: 1.05, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Gemini 3.7 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.4 | +1.76 | 실측 | [[gpqa-diamond]] 94.5%×0.4, [[humanitys-last-exam]] 47.9%×0.3 |
| 추론 | 77.8 | +1.85 | 실측 | [[gpqa-diamond]] 94.5%×1.0, [[humanitys-last-exam]] 47.9%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 57.2%×1.0 |
| 에이전트 | 67.6 | +1.18 | 실측 | [[gdpval]] 1404.0%×1.0, [[tau3-banking]] 32.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 81.7%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
