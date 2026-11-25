---
type: Model
title: Ring-flash-2.0
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: 103
is_reasoning: true
radar:
  knowledge: { s: 46.5, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 11.5, z: -1.0, r: 35.0, estimated: false }  # 코딩
  agentic: { s: 5.7, z: -1.46, r: 28.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.7, z: -1.04, r: 34.4, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.28, r: 45.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-flash-2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Ring-flash-2.0

InclusionAI · Open · Medium(103B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[gpqa-diamond]] 72.5253%×0.4, [[humanitys-last-exam]] 9.63855%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0.277551%×1.0, [[gpqa-diamond]] 72.5253%×1.0, [[humanitys-last-exam]] 9.63855%×1.0 |
| 코딩 | 35.0 | -1.0 | 실측 | [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 28.1 | -1.46 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.4 | -1.04 | 실측 | [[aa-lcr]] 21%×1.0 |
| 지시 따르기 | 45.8 | -0.28 | 실측 | [[ifbench]] 43.2653%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
