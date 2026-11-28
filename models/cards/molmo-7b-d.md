---
type: Model
title: Molmo 7B-D
creator: Allen Institute for AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4096
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 11.8, z: -1.7, r: 24.5, estimated: false }  # 전문 지식
  reasoning: { s: 11.0, z: -1.2, r: 32.0, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.66, r: 25.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 13.3, z: -2.97, r: 5.5, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 10.6, z: -1.66, r: 25.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Molmo 7B-D
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Molmo 7B-D

Allen Institute for AI · Open · Small(8B) · 컨텍스트 4k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 24.5 | -1.7 | 실측 | [[gpqa-diamond]] 24.0404%×0.4, [[humanitys-last-exam]] 5.14365%×0.3 |
| 추론 | 32.0 | -1.2 | 실측 | [[gpqa-diamond]] 24.0404%×1.0, [[humanitys-last-exam]] 5.14365%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 25.1 | -1.66 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 5.5 | -2.97 | 실측 | [[mmmu-pro]] 24.5087%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 25.2 | -1.66 | 실측 | [[ifbench]] 19.6599%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
