---
type: Model
title: Phi-4 Multimodal
creator: Microsoft
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0
output_speed_tps: 17.0
context_window: 128000
status: current
size_class: Small
params_b: 5.6
is_reasoning: false
radar:
  knowledge: { s: 17.6, z: -1.13, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.2, z: -0.91, r: 36.4, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: true }  # 코딩
  agentic: { s: 7.5, z: -1.15, r: 32.8, estimated: true }  # 에이전트
  trust: { s: 26.6, z: 0.1, r: 51.5, estimated: true }  # 신뢰성
  multimodal: { s: 0.0, z: -3.47, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 6.7, z: -1.3, r: 30.5, estimated: true }  # 긴문맥
  instruction: { s: 39.2, z: -0.57, r: 41.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Multimodal
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Phi-4 Multimodal

Microsoft · Open · Small(5.6B) · 컨텍스트 128k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 17.0 t/s · TTFT 0.84s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.4 | -0.91 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 추정 | (추정) |
| 에이전트 | 32.8 | -1.15 | 추정 | (추정) |
| 신뢰성 | 51.5 | +0.1 | 추정 | (추정) |
| 멀티모달 | 0 | -3.47 | 실측 | [[mmmu-pro]] 15.0%×1.0 |
| 긴문맥 | 30.5 | -1.3 | 추정 | (추정) |
| 지시 따르기 | 41.5 | -0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
