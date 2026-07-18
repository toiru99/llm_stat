---
type: Model
title: Gemini 1.5 Pro (Sep)
creator: Google
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.6, z: -0.19, r: 47.1, estimated: false }  # 전문 지식
  reasoning: { s: 33.0, z: -0.03, r: 49.5, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.16, r: 52.3, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.11, r: 48.3, estimated: true }  # 에이전트
  trust: { s: 19.3, z: -0.4, r: 44.0, estimated: true }  # 신뢰성
  multimodal: { s: 58.0, z: -0.65, r: 40.2, estimated: false }  # 멀티모달
  long_context: { s: 51.6, z: 0.08, r: 51.3, estimated: true }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 55.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Gemini 1.5 Pro (Sep)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.1 | -0.19 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 49.5 | -0.03 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 52.3 | +0.16 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 48.3 | -0.11 | 추정 | (추정) |
| 신뢰성 | 44.0 | -0.4 | 추정 | (추정) |
| 멀티모달 | 40.2 | -0.65 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 51.3 | +0.08 | 추정 | (추정) |
| 지시 따르기 | 55.0 | +0.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
