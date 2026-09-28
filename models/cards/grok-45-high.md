---
type: Model
title: Grok 4.5 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 1.21
output_speed_tps: 66.0
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.7, z: 1.85, r: 77.7, estimated: false }  # 전문 지식
  reasoning: { s: 71.1, z: 1.67, r: 75.1, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.56, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 74.0, z: 1.39, r: 70.9, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.92, r: 63.8, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.94, r: 64.1, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 79.9, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Grok 4.5 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.21/1M · 66.0 t/s · TTFT 5.4s · 500k ctx` · 가성비 32.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.7 | +1.85 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 75.1 | +1.67 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 73.3 | +1.56 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 70.9 | +1.39 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 63.8 | +0.92 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 64.1 | +0.94 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
