---
type: Model
title: Pixtral Large
creator: Mistral
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 124
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 25.6, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 23.7, z: -0.29, r: 45.6, estimated: true }  # 코딩
  agentic: { s: 37.4, z: -0.0, r: 49.9, estimated: false }  # 에이전트
  trust: { s: 15.7, z: -0.41, r: 43.8, estimated: true }  # 신뢰성
  multimodal: { s: 50.0, z: -1.0, r: 35.0, estimated: false }  # 멀티모달
  long_context: { s: 36.4, z: -0.39, r: 44.1, estimated: true }  # 긴문맥
  instruction: { s: 31.0, z: -0.9, r: 36.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Pixtral Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Pixtral Large

Mistral · Open · Medium(124B) · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 45.6 | -0.29 | 추정 | (추정) |
| 에이전트 | 49.9 | +-0.0 | 실측 | [[tau2-bench]] 37.0%×1.0 |
| 신뢰성 | 43.8 | -0.41 | 추정 | (추정) |
| 멀티모달 | 35.0 | -1.0 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 44.1 | -0.39 | 추정 | (추정) |
| 지시 따르기 | 36.5 | -0.9 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
