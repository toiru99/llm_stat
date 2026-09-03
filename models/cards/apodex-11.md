---
type: Model
title: Apodex 1.1
creator: Apodex
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 0.381
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.2, z: 0.91, r: 63.7, estimated: false }  # 전문 지식
  reasoning: { s: 54.0, z: 0.95, r: 64.2, estimated: false }  # 추론
  coding: { s: 69.4, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 58.4, z: 0.81, r: 62.2, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.19, r: 47.1, estimated: false }  # 신뢰성
  multimodal: { s: 90.1, z: 0.97, r: 64.5, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 83.9, z: 1.29, r: 69.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apodex 1.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Apodex 1.1

Apodex · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $3.0 · 혼합 $0.381/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 115.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.7 | +0.91 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 64.2 | +0.95 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 62.2 | +0.81 | 실측 | [[apex-agents]] 31.0%×1.0, [[gdpval]] 42.0%×1.0, [[tau3-banking]] 25.0%×1.0 |
| 신뢰성 | 47.1 | -0.19 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 64.5 | +0.97 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 69.4 | +1.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
