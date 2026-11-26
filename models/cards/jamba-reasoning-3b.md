---
type: Model
title: Jamba Reasoning 3B
creator: AI21 Labs
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 3
is_reasoning: true
radar:
  knowledge: { s: 17.1, z: -1.44, r: 28.4, estimated: false }  # 전문 지식
  reasoning: { s: 10.3, z: -1.24, r: 31.5, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 8.5, z: -1.36, r: 29.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.1, z: -1.55, r: 26.8, estimated: false }  # 긴문맥
  instruction: { s: 56.6, z: 0.26, r: 53.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba Reasoning 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Jamba Reasoning 3B

AI21 Labs · Open · Tiny(3B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 28.4 | -1.44 | 실측 | [[gpqa-diamond]] 33.3333%×0.4, [[humanitys-last-exam]] 3.75348%×0.3 |
| 추론 | 31.5 | -1.24 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 33.3333%×1.0, [[humanitys-last-exam]] 3.75348%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 29.6 | -1.36 | 실측 | [[tau2-bench]] 15.7895%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.8 | -1.55 | 실측 | [[aa-lcr]] 6.33333%×1.0 |
| 지시 따르기 | 53.9 | +0.26 | 실측 | [[ifbench]] 52.449%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
