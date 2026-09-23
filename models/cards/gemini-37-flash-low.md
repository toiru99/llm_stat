---
type: Model
title: Gemini 3.7 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.5775
output_speed_tps: 305.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.78, r: 76.6, estimated: false }  # 전문 지식
  reasoning: { s: 56.1, z: 0.96, r: 64.3, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.61, r: 74.2, estimated: false }  # 코딩
  agentic: { s: 58.3, z: 0.78, r: 61.8, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.24, r: 53.6, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.28, r: 69.2, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 82.4, z: 1.19, r: 67.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Gemini 3.7 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 305.0 t/s · TTFT 1.0s · 1M ctx` · 가성비 64.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.6 | +1.78 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 64.3 | +0.96 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 74.2 | +1.61 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 61.8 | +0.78 | 실측 | [[gdpval]] 40.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 53.6 | +0.24 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 69.2 | +1.28 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 67.9 | +1.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
