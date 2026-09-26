---
type: Model
title: Gemini 3.8 Flash (low)
creator: Google
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 0.5775
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.7, z: 1.75, r: 76.3, estimated: false }  # 전문 지식
  reasoning: { s: 55.9, z: 0.96, r: 64.4, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 62.2, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.39, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.28, r: 69.2, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 83.3, z: 1.24, r: 68.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Gemini 3.8 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 57.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.3 | +1.75 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 64.4 | +0.96 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[gdpval]] 40.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 55.9 | +0.39 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 69.2 | +1.28 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
