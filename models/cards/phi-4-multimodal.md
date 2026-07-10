---
type: Model
title: Phi-4 Multimodal
creator: Microsoft
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.0
output_speed_tps: 18.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.4, z: -1.11, r: 33.4, estimated: false }  # 전문 지식
  reasoning: { s: 16.0, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 18.3, z: -1.17, r: 32.4, estimated: false }  # 코딩
  agentic: { s: 15.7, z: -0.79, r: 38.2, estimated: true }  # 에이전트
  trust: { s: 24.9, z: -0.13, r: 48.1, estimated: true }  # 신뢰성
  multimodal: { s: 0.0, z: -3.41, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 7.6, z: -1.2, r: 32.0, estimated: true }  # 긴문맥
  instruction: { s: 24.8, z: -1.13, r: 33.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Multimodal
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Phi-4 Multimodal

Microsoft · Open · Unknown · 컨텍스트 128k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · 18.0 t/s · TTFT 0.82s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.4 | -1.11 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.4 | -1.17 | 실측 | [[scicode]] 11.0%×1.0 |
| 에이전트 | 38.2 | -0.79 | 추정 | (추정) |
| 신뢰성 | 48.1 | -0.13 | 추정 | (추정) |
| 멀티모달 | 0 | -3.41 | 실측 | [[mmmu-pro]] 15.0%×1.0 |
| 긴문맥 | 32.0 | -1.2 | 추정 | (추정) |
| 지시 따르기 | 33.1 | -1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
