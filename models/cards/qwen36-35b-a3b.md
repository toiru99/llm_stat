---
type: Model
title: Qwen3.6 35B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.5625
output_speed_tps: 133.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.2, z: 0.65, r: 59.8, estimated: false }  # 전문 지식
  reasoning: { s: 60.5, z: 0.67, r: 60.1, estimated: false }  # 추론
  coding: { s: 51.0, z: 0.47, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.19, r: 52.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.86, r: 62.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Qwen3.6 35B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.38 · 출력 $2.25 · 혼합 $0.5625/1M · 133.0 t/s · TTFT 1.96s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.8 | +0.65 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 60.1 | +0.67 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 57.0 | +0.47 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 52.8 | +0.19 | 실측 | [[gdpval]] 899.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
