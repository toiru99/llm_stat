---
type: Model
title: GPT-6.1 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 1.47
output_speed_tps: 60.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.3, z: 2.16, r: 82.4, estimated: false }  # 전문 지식
  reasoning: { s: 88.5, z: 2.37, r: 85.5, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 73.1, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.11, r: 66.6, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.22, r: 68.4, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 77.0, z: 0.95, r: 64.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# GPT-6.1 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 60.0 t/s · TTFT 57.97s · 1M ctx` · 가성비 34.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.4 | +2.16 | 실측 | [[aa-omniscience]] 61.0%×1.0, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 85.5 | +2.37 | 실측 | [[critpt]] 30.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[gdpval]] 49.0%×1.0 |
| 신뢰성 | 66.6 | +1.11 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 68.4 | +1.22 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 64.2 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
