---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Medium
params_b: 80
is_reasoning: true
radar:
  knowledge: { s: 50.4, z: 0.18, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.7, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 14.9, z: -0.88, r: 36.8, estimated: false }  # 코딩
  agentic: { s: 23.1, z: -0.85, r: 37.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.43, r: 56.5, estimated: false }  # 긴문맥
  instruction: { s: 68.2, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium(80B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.18 | 실측 | [[gpqa-diamond]] 75.8586%×0.4, [[humanitys-last-exam]] 12.5579%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 75.8586%×1.0, [[humanitys-last-exam]] 12.5579%×1.0 |
| 코딩 | 36.8 | -0.88 | 실측 | [[terminal-bench]] 9.84848%×0.5 |
| 에이전트 | 37.3 | -0.85 | 실측 | [[gdpval]] 135.27 Elo×1.0, [[tau2-bench]] 41.5205%×1.0, [[tau3-banking]] 6.18557%×1.0, [[terminal-bench]] 9.84848%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.5 | +0.43 | 실측 | [[aa-lcr]] 63.6667%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 60.6803%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
