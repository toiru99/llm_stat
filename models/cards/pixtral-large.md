---
type: Model
title: Pixtral Large
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 124
is_reasoning: false
radar:
  knowledge: { s: 27.9, z: -0.92, r: 36.2, estimated: false }  # 전문 지식
  reasoning: { s: 24.7, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 36.9, z: -0.36, r: 44.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 48.1, z: -1.19, r: 32.2, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 31.4, z: -0.79, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Pixtral Large
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Pixtral Large

Mistral · Open · Medium(124B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 50.5051%×0.4, [[humanitys-last-exam]] 2.8%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[gpqa-diamond]] 50.5051%×1.0, [[humanitys-last-exam]] 2.8%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 44.6 | -0.36 | 실측 | [[tau2-bench]] 36.5497%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 32.2 | -1.19 | 실측 | [[mmmu-pro]] 50.578%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 38.1 | -0.79 | 실측 | [[ifbench]] 34.4898%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
