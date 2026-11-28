---
type: Model
title: Ling 2.6 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Medium
params_b: 107
is_reasoning: false
radar:
  knowledge: { s: 35.7, z: -0.54, r: 42.0, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.3, r: 45.5, estimated: false }  # 코딩
  agentic: { s: 39.1, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.68, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 63.6, z: 0.55, r: 58.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 2.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Ling 2.6 Flash

InclusionAI · Open · Medium(107B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.0 | -0.54 | 실측 | [[gpqa-diamond]] 59.2929%×0.4, [[humanitys-last-exam]] 6.25579%×0.3 |
| 추론 | 39.8 | -0.68 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 59.2929%×1.0, [[humanitys-last-exam]] 6.25579%×1.0 |
| 코딩 | 45.5 | -0.3 | 실측 | [[terminal-bench]] 21.2121%×0.5 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[gdpval]] 325.73 Elo×1.0, [[tau2-bench]] 85.9649%×1.0, [[tau3-banking]] 2.8866%×1.0, [[terminal-bench]] 21.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.68 | 실측 | [[aa-lcr]] 31.3333%×1.0 |
| 지시 따르기 | 58.2 | +0.55 | 실측 | [[ifbench]] 57.415%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
