---
type: Model
title: Qwen3.6 35B A3B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.5625
output_speed_tps: 84.3541785781049
context_window: 262144
status: current
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 55.0, z: 0.4, r: 56.0, estimated: false }  # 전문 지식
  reasoning: { s: 33.6, z: -0.08, r: 48.8, estimated: false }  # 추론
  coding: { s: 39.1, z: -0.07, r: 49.0, estimated: false }  # 코딩
  agentic: { s: 47.6, z: 0.02, r: 50.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.4, z: 0.2, r: 53.1, estimated: false }  # 멀티모달
  long_context: { s: 72.6, z: 0.45, r: 56.8, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.69, r: 39.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.6 35B A3B (non-reasoning)

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.375 · 출력 $2.25 · 혼합 $0.5625/1M · 84.3541785781049 t/s · TTFT 3.24770609611015s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 56.0 | +0.4 | 실측 | [[gpqa-diamond]] 81.7172%×0.4, [[humanitys-last-exam]] 13.9018%×0.3 |
| 추론 | 48.8 | -0.08 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 81.7172%×1.0, [[humanitys-last-exam]] 13.9018%×1.0 |
| 코딩 | 49.0 | -0.07 | 실측 | [[terminal-bench]] 25.7576%×0.5 |
| 에이전트 | 50.3 | +0.02 | 실측 | [[gdpval]] 853.49 Elo×1.0, [[tau2-bench]] 85.0877%×1.0, [[tau3-banking]] 5.36082%×1.0, [[terminal-bench]] 25.7576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.1 | +0.2 | 실측 | [[mmmu-pro]] 71.0405%×1.0 |
| 긴문맥 | 56.8 | +0.45 | 실측 | [[aa-lcr]] 64.3333%×1.0 |
| 지시 따르기 | 39.6 | -0.69 | 실측 | [[ifbench]] 36.1905%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
