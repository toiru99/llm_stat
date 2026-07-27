---
type: Model
title: Grok 4.5 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: None
output_speed_tps: 58.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.5, z: 2.13, r: 82.0, estimated: false }  # 전문 지식
  reasoning: { s: 73.6, z: 1.97, r: 79.6, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.8, r: 77.0, estimated: false }  # 코딩
  agentic: { s: 87.5, z: 1.98, r: 79.7, estimated: false }  # 에이전트
  trust: { s: 51.7, z: 1.11, r: 66.7, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.03, r: 65.4, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 77.9, z: 1.02, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Grok 4.5 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $None/1M · 58.0 t/s · TTFT 8.31s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.0 | +2.13 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 79.6 | +1.97 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 77.0 | +1.8 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 79.7 | +1.98 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 66.7 | +1.11 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 65.4 | +1.03 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 65.4 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
