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
  knowledge: { s: 78.7, z: 1.67, r: 75.1, estimated: false }  # 전문 지식
  reasoning: { s: 55.9, z: 0.89, r: 63.3, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 62.2, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.34, r: 55.1, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.22, r: 68.4, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.2, r: 67.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Gemini 3.8 Flash (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 57.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.1 | +1.67 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 63.3 | +0.89 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[gdpval]] 40.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 55.1 | +0.34 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 68.4 | +1.22 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 67.9 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
