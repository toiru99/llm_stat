---
type: Model
title: Gemini 1.5 Flash (Sep)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.3, z: -1.05, r: 34.2, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -0.64, r: 40.5, estimated: false }  # 추론
  coding: { s: 39.2, z: -0.02, r: 49.7, estimated: true }  # 코딩
  agentic: { s: 21.7, z: -0.79, r: 38.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 45.3, z: -1.33, r: 30.1, estimated: false }  # 멀티모달
  long_context: { s: 21.5, z: -0.94, r: 35.9, estimated: true }  # 긴문맥
  instruction: { s: 26.0, z: -1.16, r: 32.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 1.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.2 | -1.05 | 실측 | [[gpqa-diamond]] 46.2626262626263%×0.4, [[humanitys-last-exam]] 3.17%×0.3 |
| 추론 | 40.5 | -0.64 | 실측 | [[gpqa-diamond]] 46.2626262626263%×1.0, [[humanitys-last-exam]] 3.17%×1.0 |
| 코딩 | 49.7 | -0.02 | 추정 | (추정) |
| 에이전트 | 38.1 | -0.79 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 30.1 | -1.33 | 실측 | [[mmmu-pro]] 48.3815028901734%×1.0 |
| 긴문맥 | 35.9 | -0.94 | 추정 | (추정) |
| 지시 따르기 | 32.6 | -1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
