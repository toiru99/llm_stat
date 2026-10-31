---
type: Model
title: Qwen3.5 4B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.042
output_speed_tps: 15.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.5, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: -0.2, r: 47.1, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 12.3, z: -0.75, r: 38.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.38, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 39.3, z: -0.39, r: 44.2, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Qwen3.5 4B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · 15.0 t/s · TTFT 0.99s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 47.1 | -0.2 | 실측 | [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 38.7 | -0.75 | 실측 | [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.2 | -0.38 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 44.2 | -0.39 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
