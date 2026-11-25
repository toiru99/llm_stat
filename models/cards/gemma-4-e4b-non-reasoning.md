---
type: Model
title: Gemma 4 E4B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 32.0, z: -0.72, r: 39.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.4, z: -0.78, r: 38.2, estimated: false }  # 추론
  coding: { s: 11.5, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 18.9, z: -1.0, r: 35.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 49.0, z: -1.15, r: 32.8, estimated: false }  # 멀티모달
  long_context: { s: 27.1, z: -0.94, r: 35.9, estimated: false }  # 긴문맥
  instruction: { s: 39.9, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemma 4 E4B (non-reasoning)

Google · Open · Small(8B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.72 | 실측 | [[gpqa-diamond]] 54.9495%×0.4, [[humanitys-last-exam]] 4.81928%×0.3 |
| 추론 | 38.2 | -0.78 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 54.9495%×1.0, [[humanitys-last-exam]] 4.81928%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 35.1 | -1.0 | 실측 | [[tau2-bench]] 26.0234%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 32.8 | -1.15 | 실측 | [[mmmu-pro]] 51.2139%×1.0 |
| 긴문맥 | 35.9 | -0.94 | 실측 | [[aa-lcr]] 24%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 40.5442%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
