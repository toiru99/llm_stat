---
type: Model
title: Magistral Small 1
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 40000
status: past
size_class: Small
params_b: 23.6
is_reasoning: true
radar:
  knowledge: { s: 39.7, z: -0.34, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 16.9, z: -1.07, r: 34.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 17.8, z: -1.36, r: 29.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Magistral Small 1

Mistral · Open · Small(23.6B) · 컨텍스트 40k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 40k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.34 | 실측 | [[gpqa-diamond]] 64.1414%×0.4, [[humanitys-last-exam]] 7.55329%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 64.1414%×1.0, [[humanitys-last-exam]] 7.55329%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 34.0 | -1.07 | 실측 | [[tau2-bench]] 26.6082%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 29.6 | -1.36 | 실측 | [[ifbench]] 24.7619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
