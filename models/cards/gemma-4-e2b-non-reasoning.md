---
type: Model
title: Gemma 4 E2B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 5.1
is_reasoning: false
radar:
  knowledge: { s: 22.4, z: -1.18, r: 32.3, estimated: false }  # 전문 지식
  reasoning: { s: 13.5, z: -1.08, r: 33.9, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -1.2, r: 31.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 36.4, z: -1.79, r: 23.2, estimated: false }  # 멀티모달
  long_context: { s: 18.4, z: -1.2, r: 32.0, estimated: false }  # 긴문맥
  instruction: { s: 30.2, z: -0.84, r: 37.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemma 4 E2B (non-reasoning)

Google · Open · Small(5.1B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 32.3 | -1.18 | 실측 | [[gpqa-diamond]] 40.5051%×0.4, [[humanitys-last-exam]] 4.7266%×0.3 |
| 추론 | 33.9 | -1.08 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 40.5051%×1.0, [[humanitys-last-exam]] 4.7266%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 31.9 | -1.2 | 실측 | [[tau2-bench]] 22.2222%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 23.2 | -1.79 | 실측 | [[mmmu-pro]] 41.7919%×1.0 |
| 긴문맥 | 32.0 | -1.2 | 실측 | [[aa-lcr]] 16.3333%×1.0 |
| 지시 따르기 | 37.4 | -0.84 | 실측 | [[ifbench]] 33.6054%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
