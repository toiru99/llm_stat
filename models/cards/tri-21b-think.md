---
type: Model
title: Tri-21B-Think
creator: Trillion Labs
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 36.1, z: -0.52, r: 42.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.9, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 41.4, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.7, z: -1.23, r: 31.6, estimated: false }  # 긴문맥
  instruction: { s: 59.7, z: 0.38, r: 55.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tri-21B-Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Tri-21B-Think

Trillion Labs · Open · Small(21B) · 컨텍스트 32k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.2 | -0.52 | 실측 | [[gpqa-diamond]] 60.101%×0.4, [[humanitys-last-exam]] 5.93142%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 60.101%×1.0, [[humanitys-last-exam]] 5.93142%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[tau2-bench]] 80.9942%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.6 | -1.23 | 실측 | [[aa-lcr]] 15.6667%×1.0 |
| 지시 따르기 | 55.8 | +0.38 | 실측 | [[ifbench]] 54.6259%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
