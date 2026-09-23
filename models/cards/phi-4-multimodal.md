---
type: Model
title: Phi-4 Multimodal
creator: Microsoft
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0
output_speed_tps: 17.0
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.5, z: -1.15, r: 32.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.1, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.21, r: 31.8, estimated: true }  # 코딩
  agentic: { s: 2.4, z: -1.36, r: 29.6, estimated: true }  # 에이전트
  trust: { s: 32.0, z: 0.29, r: 54.4, estimated: true }  # 신뢰성
  multimodal: { s: 0.0, z: -3.54, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 4.3, z: -1.41, r: 28.9, estimated: true }  # 긴문맥
  instruction: { s: 34.9, z: -0.78, r: 38.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Multimodal
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Phi-4 Multimodal

Microsoft · Open · Small · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 17.0 t/s · TTFT 0.83s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.8 | -1.15 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.8 | -1.21 | 추정 | (추정) |
| 에이전트 | 29.6 | -1.36 | 추정 | (추정) |
| 신뢰성 | 54.4 | +0.29 | 추정 | (추정) |
| 멀티모달 | 0 | -3.54 | 실측 | [[mmmu-pro]] 15.0%×1.0 |
| 긴문맥 | 28.9 | -1.41 | 추정 | (추정) |
| 지시 따르기 | 38.4 | -0.78 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
