---
type: Model
title: Phi-4 Multimodal
creator: Microsoft
license: Open
intelligence_index: 4.0
price_blended_usd_1m: 0
output_speed_tps: 17.0
context_window: 128000
status: current
size_class: Small
params_b: 5.6
is_reasoning: false
radar:
  knowledge: { s: 18.0, z: -1.13, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.9, r: 36.5, estimated: false }  # 추론
  coding: { s: 18.3, z: -1.22, r: 31.7, estimated: false }  # 코딩
  agentic: { s: 11.5, z: -0.99, r: 35.1, estimated: true }  # 에이전트
  trust: { s: 8.2, z: -0.75, r: 38.8, estimated: true }  # 신뢰성
  multimodal: { s: 0.0, z: -3.48, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 9.4, z: -1.22, r: 31.6, estimated: true }  # 긴문맥
  instruction: { s: 24.8, z: -1.16, r: 32.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Multimodal
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Phi-4 Multimodal

Microsoft · Open · Small(5.6B) · 컨텍스트 128k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 17.0 t/s · TTFT 0.84s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.5 | -0.9 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.7 | -1.22 | 실측 | [[scicode]] 11.0%×1.0 |
| 에이전트 | 35.1 | -0.99 | 추정 | (추정) |
| 신뢰성 | 38.8 | -0.75 | 추정 | (추정) |
| 멀티모달 | 0 | -3.48 | 실측 | [[mmmu-pro]] 15.0%×1.0 |
| 긴문맥 | 31.6 | -1.22 | 추정 | (추정) |
| 지시 따르기 | 32.6 | -1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
