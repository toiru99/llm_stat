---
type: Model
title: Qwen3.5 122B A10B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.68
output_speed_tps: 143.0
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.2, z: 0.43, r: 56.4, estimated: false }  # 전문 지식
  reasoning: { s: 54.9, z: 0.41, r: 56.2, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 34.5, z: 0.01, r: 50.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.49, r: 57.3, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.09, r: 51.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 122B A10B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Qwen3.5 122B A10B (non-reasoning)

Alibaba · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.4 · 출력 $3.2 · 혼합 $0.68/1M · 143.0 t/s · TTFT 2.3s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.4 | +0.43 | 실측 | [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 56.2 | +0.41 | 실측 | [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 50.1 | +0.01 | 실측 | [[gdpval]] 716.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 57.3 | +0.49 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 51.4 | +0.09 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
