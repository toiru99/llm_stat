---
type: Model
title: Apriel-v1.6-15B-Thinker
creator: ServiceNow
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 15
is_reasoning: true
radar:
  knowledge: { s: 47.7, z: 0.04, r: 50.7, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.3, r: 45.6, estimated: false }  # 추론
  coding: { s: 21.8, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 45.9, z: -0.04, r: 49.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apriel-v1.6-15B-Thinker
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Apriel-v1.6-15B-Thinker

ServiceNow · Open · Small(15B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.7 | +0.04 | 실측 | [[gpqa-diamond]] 73.3333%×0.4, [[humanitys-last-exam]] 10.797%×0.3 |
| 추론 | 45.6 | -0.3 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 73.3333%×1.0, [[humanitys-last-exam]] 10.797%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[terminal-bench]] 14.3939%×0.5 |
| 에이전트 | 49.4 | -0.04 | 실측 | [[tau2-bench]] 69.2982%×1.0, [[terminal-bench]] 14.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 69.1156%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
