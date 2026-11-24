---
type: Model
title: Devstral Small 2
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 30.1, z: -0.81, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 17.8, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 36.4, z: -0.16, r: 47.6, estimated: false }  # 코딩
  agentic: { s: 27.7, z: -0.68, r: 39.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 40.2, z: -1.59, r: 26.1, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.8, r: 38.0, estimated: false }  # 긴문맥
  instruction: { s: 26.7, z: -0.99, r: 35.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Devstral Small 2

Mistral · Open · Small(24B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.81 | 실측 | [[gpqa-diamond]] 53.2323%×0.4, [[humanitys-last-exam]] 3.47544%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 53.2323%×1.0, [[humanitys-last-exam]] 3.47544%×1.0 |
| 코딩 | 47.6 | -0.16 | 실측 | [[scicode]] 32.4074%×1.0, [[terminal-bench]] 16.6667%×0.5 |
| 에이전트 | 39.7 | -0.68 | 실측 | [[gdpval]] 535.11 Elo×1.0, [[tau2-bench]] 23.3918%×1.0, [[tau3-banking]] 10.7216%×1.0, [[terminal-bench]] 16.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 26.1 | -1.59 | 실측 | [[mmmu-pro]] 44.6243%×1.0 |
| 긴문맥 | 38.0 | -0.8 | 실측 | [[aa-lcr]] 28%×1.0 |
| 지시 따르기 | 35.2 | -0.99 | 실측 | [[ifbench]] 31.1565%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
