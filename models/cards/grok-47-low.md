---
type: Model
title: Grok 4.7 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 1.35
output_speed_tps: 78.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.0, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 52.0, z: 0.7, r: 60.5, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 80.6, z: 1.6, r: 73.9, estimated: false }  # 에이전트
  trust: { s: 59.8, z: 1.54, r: 73.2, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.74, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 68.7, z: 0.6, r: 59.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Grok 4.7 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 78.0 t/s · TTFT 8.92s · 500k ctx` · 가성비 31.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 60.5 | +0.7 | 실측 | [[critpt]] 13.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 73.9 | +1.6 | 실측 | [[gdpval]] 54.0%×1.0 |
| 신뢰성 | 73.2 | +1.54 | 실측 | [[aa-omniscience]] 60.0%×1.0 |
| 멀티모달 | 61.2 | +0.74 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 59.0 | +0.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
