---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 33.4
is_reasoning: false
radar:
  knowledge: { s: 41.2, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 24.7, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 21.1, z: -0.92, r: 36.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.4, z: -0.26, r: 46.2, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.52, r: 42.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Small(33.4B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[gpqa-diamond]] 67.0707%×0.4, [[humanitys-last-exam]] 6.81186%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 67.0707%×1.0, [[humanitys-last-exam]] 6.81186%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[terminal-bench]] 8.33333%×0.5 |
| 에이전트 | 36.2 | -0.92 | 실측 | [[tau2-bench]] 29.2398%×1.0, [[terminal-bench]] 8.33333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.2 | -0.26 | 실측 | [[mmmu-pro]] 64.2775%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 42.2 | -0.52 | 실측 | [[ifbench]] 39.1837%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
