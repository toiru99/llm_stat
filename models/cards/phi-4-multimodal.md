---
type: Model
title: Phi-4 Multimodal
creator: Microsoft
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.104
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.5, z: -1.19, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 16.1, z: -0.96, r: 35.7, estimated: false }  # 추론
  coding: { s: 1.3, z: -1.24, r: 31.4, estimated: true }  # 코딩
  agentic: { s: 0.4, z: -1.19, r: 32.2, estimated: true }  # 에이전트
  trust: { s: 41.4, z: 0.64, r: 59.6, estimated: true }  # 신뢰성
  multimodal: { s: 0.0, z: -3.61, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 6.4, z: -1.4, r: 29.0, estimated: true }  # 긴문맥
  instruction: { s: 26.8, z: -1.19, r: 32.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Multimodal
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Phi-4 Multimodal

Microsoft · Open · Small · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.08 · 출력 $0.32 · 혼합 $0.104/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 57.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.19 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.7 | -0.96 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.4 | -1.24 | 추정 | (추정) |
| 에이전트 | 32.2 | -1.19 | 추정 | (추정) |
| 신뢰성 | 59.6 | +0.64 | 추정 | (추정) |
| 멀티모달 | 0 | -3.61 | 실측 | [[mmmu-pro]] 15.0%×1.0 |
| 긴문맥 | 29.0 | -1.4 | 추정 | (추정) |
| 지시 따르기 | 32.2 | -1.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
