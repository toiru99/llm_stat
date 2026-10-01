---
type: Model
title: Pixtral Large
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.64, r: 40.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.5, r: 42.5, estimated: false }  # 추론
  coding: { s: 20.2, z: -0.55, r: 41.7, estimated: true }  # 코딩
  agentic: { s: 37.4, z: -0.05, r: 49.2, estimated: false }  # 에이전트
  trust: { s: 31.1, z: 0.21, r: 53.1, estimated: true }  # 신뢰성
  multimodal: { s: 49.3, z: -1.1, r: 33.5, estimated: false }  # 멀티모달
  long_context: { s: 37.0, z: -0.44, r: 43.4, estimated: true }  # 긴문맥
  instruction: { s: 31.0, z: -0.96, r: 35.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Pixtral Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Pixtral Large

Mistral · Open · Medium · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.4 | -0.64 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 42.5 | -0.5 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 41.7 | -0.55 | 추정 | (추정) |
| 에이전트 | 49.2 | -0.05 | 실측 | [[tau2-bench]] 37.0%×1.0 |
| 신뢰성 | 53.1 | +0.21 | 추정 | (추정) |
| 멀티모달 | 33.5 | -1.1 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 43.4 | -0.44 | 추정 | (추정) |
| 지시 따르기 | 35.6 | -0.96 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
