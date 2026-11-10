---
type: Model
title: Apodex 1.1
creator: Apodex
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.381
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.9, z: 1.11, r: 66.6, estimated: false }  # 전문 지식
  reasoning: { s: 66.8, z: 1.16, r: 67.3, estimated: false }  # 추론
  coding: { s: 63.5, z: 0.86, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 59.6, z: 0.84, r: 62.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 89.4, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 84.1, z: 1.35, r: 70.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apodex 1.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Apodex 1.1

Apodex · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $3.0 · 혼합 $0.381/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.6 | +1.11 | 실측 | [[gpqa-diamond]] 86.4%×0.4, [[humanitys-last-exam]] 34.1%×0.3 |
| 추론 | 67.3 | +1.16 | 실측 | [[gpqa-diamond]] 86.4%×1.0, [[humanitys-last-exam]] 34.1%×1.0 |
| 코딩 | 63.0 | +0.86 | 실측 | [[scicode]] 45.5%×1.0 |
| 에이전트 | 62.6 | +0.84 | 실측 | [[apex-agents]] 31.2%×1.0, [[gdpval]] 1195.0%×1.0, [[tau3-banking]] 25.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.3%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
