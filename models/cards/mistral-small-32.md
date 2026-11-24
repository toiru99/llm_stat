---
type: Model
title: Mistral Small 3.2
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0875
output_speed_tps: 35.661692741019
context_window: 128000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 28.8, z: -0.87, r: 36.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 27.2, z: -0.47, r: 43.0, estimated: false }  # 코딩
  agentic: { s: 15.3, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 44.6, z: -1.37, r: 29.5, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -1.07, r: 34.0, estimated: false }  # 긴문맥
  instruction: { s: 30.0, z: -0.85, r: 37.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Mistral Small 3.2

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.075 · 출력 $0.2 · 혼합 $0.0875/1M · 35.661692741019 t/s · TTFT 2.77328670093335s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 36.9 | -0.87 | 실측 | [[gpqa-diamond]] 50.5051%×0.4, [[humanitys-last-exam]] 4.30955%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 50.5051%×1.0, [[humanitys-last-exam]] 4.30955%×1.0 |
| 코딩 | 43.0 | -0.47 | 실측 | [[scicode]] 28.588%×1.0, [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[gdpval]] -188.15 Elo×1.0, [[tau2-bench]] 29.5322%×1.0, [[tau3-banking]] 6.18557%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.5 | -1.37 | 실측 | [[mmmu-pro]] 47.9769%×1.0 |
| 긴문맥 | 34.0 | -1.07 | 실측 | [[aa-lcr]] 20.3333%×1.0 |
| 지시 따르기 | 37.2 | -0.85 | 실측 | [[ifbench]] 33.4694%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
