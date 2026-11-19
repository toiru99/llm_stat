---
type: Model
title: Phi-4 Multimodal
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: 0.104
output_speed_tps: 20.947041911301
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.7, z: -1.48, r: 27.8, estimated: false }  # 전문 지식
  reasoning: { s: 15.2, z: -1.0, r: 35.0, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.32, r: 30.2, estimated: true }  # 코딩
  agentic: { s: 1.2, z: -1.51, r: 27.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 0.0, z: -3.65, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 1.8, z: -1.54, r: 26.9, estimated: true }  # 긴문맥
  instruction: { s: 24.0, z: -1.25, r: 31.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Multimodal
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Phi-4 Multimodal

Microsoft · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.08 · 출력 $0.32 · 혼합 $0.104/1M · 20.947041911301 t/s · TTFT 0.629469662088197s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.8 | -1.48 | 실측 | [[gpqa-diamond]] 31.5151515151515%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.0 | -1.0 | 실측 | [[gpqa-diamond]] 31.5151515151515%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 30.2 | -1.32 | 추정 | (추정) |
| 에이전트 | 27.3 | -1.51 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 0 | -3.65 | 실측 | [[mmmu-pro]] 14.5086705202312%×1.0 |
| 긴문맥 | 26.9 | -1.54 | 추정 | (추정) |
| 지시 따르기 | 31.2 | -1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
