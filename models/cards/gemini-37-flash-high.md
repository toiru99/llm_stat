---
type: Model
title: Gemini 3.7 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 0.5775
output_speed_tps: 290.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.4, z: 2.0, r: 80.0, estimated: false }  # 전문 지식
  reasoning: { s: 73.6, z: 1.71, r: 75.6, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.63, r: 74.4, estimated: false }  # 코딩
  agentic: { s: 65.2, z: 1.03, r: 65.5, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.36, r: 55.5, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Gemini 3.7 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 290.0 t/s · TTFT 15.35s · 1M ctx` · 가성비 67.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.0 | +2.0 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 75.6 | +1.71 | 실측 | [[critpt]] 14.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 74.4 | +1.63 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 65.5 | +1.03 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 55.5 | +0.36 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
