---
type: Model
title: Qwen3.5 9B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.178
output_speed_tps: None
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 51.3, z: 0.09, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 46.7, z: 0.05, r: 50.8, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 27.6, z: -0.23, r: 46.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 70.3, z: -0.06, r: 49.1, estimated: false }  # 멀티모달
  long_context: { s: 51.9, z: -0.02, r: 49.6, estimated: false }  # 긴문맥
  instruction: { s: 36.1, z: -0.72, r: 39.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Qwen3.5 9B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.17 · 출력 $0.25 · 혼합 $0.178/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.09 | 실측 | [[gpqa-diamond]] 78.6%×0.4, [[humanitys-last-exam]] 9.4%×0.3 |
| 추론 | 50.8 | +0.05 | 실측 | [[gpqa-diamond]] 78.6%×1.0, [[humanitys-last-exam]] 9.4%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[terminal-bench]] 18.2%×0.5 |
| 에이전트 | 46.6 | -0.23 | 실측 | [[terminal-bench]] 18.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.1 | -0.06 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 49.6 | -0.02 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 39.3 | -0.72 | 실측 | [[ifbench]] 37.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
