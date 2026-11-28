---
type: Model
title: Qwen3.5 122B A10B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.68
output_speed_tps: 102.614420691521
context_window: 262144
status: current
size_class: Medium
params_b: 125
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: 0.03, r: 50.4, estimated: false }  # 추론
  coding: { s: 44.8, z: 0.13, r: 51.9, estimated: false }  # 코딩
  agentic: { s: 49.8, z: 0.09, r: 51.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.4, z: 0.15, r: 52.3, estimated: false }  # 멀티모달
  long_context: { s: 69.2, z: 0.35, r: 55.3, estimated: false }  # 긴문맥
  instruction: { s: 54.3, z: 0.16, r: 52.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 122B A10B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3.5 122B A10B (non-reasoning)

Alibaba · Open · Medium(125B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.4 · 출력 $3.2 · 혼합 $0.68/1M · 102.614420691521 t/s · TTFT 4.36327653914908s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[gpqa-diamond]] 82.7273%×0.4, [[humanitys-last-exam]] 15.9407%×0.3 |
| 추론 | 50.4 | +0.03 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 82.7273%×1.0, [[humanitys-last-exam]] 15.9407%×1.0 |
| 코딩 | 51.9 | +0.13 | 실측 | [[terminal-bench]] 29.5455%×0.5 |
| 에이전트 | 51.4 | +0.09 | 실측 | [[gdpval]] 715.62 Elo×1.0, [[tau2-bench]] 84.5029%×1.0, [[tau3-banking]] 10.3093%×1.0, [[terminal-bench]] 29.5455%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.3 | +0.15 | 실측 | [[mmmu-pro]] 70.289%×1.0 |
| 긴문맥 | 55.3 | +0.35 | 실측 | [[aa-lcr]] 61.3333%×1.0 |
| 지시 따르기 | 52.4 | +0.16 | 실측 | [[ifbench]] 50.8163%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
