---
type: Model
title: Molmo 7B-D
creator: Allen Institute for AI
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: current
size_class: Small
params_b: 8.02
is_reasoning: false
radar:
  knowledge: { s: 12.8, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 12.2, z: -1.12, r: 33.2, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.77, r: 23.4, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.42, r: 28.8, estimated: false }  # 에이전트
  trust: { s: 16.8, z: -0.53, r: 42.0, estimated: true }  # 신뢰성
  multimodal: { s: 14.3, z: -2.77, r: 8.5, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.73, r: 24.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Molmo 7B-D
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# Molmo 7B-D

Allen Institute for AI · Open · Small(8.02B) · 컨텍스트 4k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[gpqa-diamond]] 24.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 24.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.4 | -1.77 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.8 | -1.42 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 추정 | (추정) |
| 멀티모달 | 8.5 | -2.77 | 실측 | [[mmmu-pro]] 25.0%×1.0 |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 24.1 | -1.73 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
