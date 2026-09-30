---
type: Model
title: Gemini 3.7 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.5775
output_speed_tps: 285.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.0, z: 1.8, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 62.3, z: 1.19, r: 67.8, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.8, r: 77.0, estimated: false }  # 코딩
  agentic: { s: 65.7, z: 1.05, r: 65.7, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.32, r: 54.7, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.28, r: 69.1, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Gemini 3.7 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 285.0 t/s · TTFT 6.72s · 1M ctx` · 가성비 69.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.8 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 67.8 | +1.19 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 77.0 | +1.8 | 실측 | [[scicode]] 60.0%×1.0 |
| 에이전트 | 65.7 | +1.05 | 실측 | [[gdpval]] 42.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 54.7 | +0.32 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 69.1 | +1.28 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
