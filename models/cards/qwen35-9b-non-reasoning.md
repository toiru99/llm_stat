---
type: Model
title: Qwen3.5 9B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.178
output_speed_tps: 108.703256723966
context_window: 262144
status: current
size_class: Small
params_b: 9.7
is_reasoning: false
radar:
  knowledge: { s: 50.3, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.22, r: 46.8, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 56.7, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.7, z: -0.09, r: 48.7, estimated: false }  # 멀티모달
  long_context: { s: 51.9, z: -0.18, r: 47.3, estimated: false }  # 긴문맥
  instruction: { s: 36.1, z: -0.6, r: 41.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.5 9B (non-reasoning)

Alibaba · Open · Small(9.7B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.17 · 출력 $0.25 · 혼합 $0.178/1M · 108.703256723966 t/s · TTFT 2.98579664355313s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[gpqa-diamond]] 78.5859%×0.4, [[humanitys-last-exam]] 9.36052%×0.3 |
| 추론 | 46.8 | -0.22 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 78.5859%×1.0, [[humanitys-last-exam]] 9.36052%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[terminal-bench]] 18.1818%×0.5 |
| 에이전트 | 55.1 | +0.34 | 실측 | [[tau2-bench]] 85.0877%×1.0, [[terminal-bench]] 18.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.7 | -0.09 | 실측 | [[mmmu-pro]] 66.763%×1.0 |
| 긴문맥 | 47.3 | -0.18 | 실측 | [[aa-lcr]] 46%×1.0 |
| 지시 따르기 | 41.1 | -0.6 | 실측 | [[ifbench]] 37.8231%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
