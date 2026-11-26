---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.702
output_speed_tps: 39.0958760407006
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 75.1, z: 1.37, r: 70.6, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 1.01, r: 65.1, estimated: false }  # 추론
  coding: { s: 71.1, z: 1.01, r: 65.2, estimated: false }  # 코딩
  agentic: { s: 68.1, z: 0.74, r: 61.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.77, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.03, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: 89.7, z: 1.63, r: 74.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Kimi K2.6

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · 39.0958760407006 t/s · TTFT 7.20284628784716s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.6 | +1.37 | 실측 | [[gpqa-diamond]] 91.1111%×0.4, [[humanitys-last-exam]] 37.4884%×0.3 |
| 추론 | 65.1 | +1.01 | 실측 | [[critpt]] 8%×1.0, [[gpqa-diamond]] 91.1111%×1.0, [[humanitys-last-exam]] 37.4884%×1.0 |
| 코딩 | 65.2 | +1.01 | 실측 | [[scicode]] 51.5046%×1.0, [[terminal-bench]] 43.9394%×0.5 |
| 에이전트 | 61.1 | +0.74 | 실측 | [[gdpval]] 1046.72 Elo×1.0, [[tau2-bench]] 95.9064%×1.0, [[tau3-banking]] 23.299%×1.0, [[terminal-bench]] 43.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.6 | +0.77 | 실측 | [[mmmu-pro]] 79.3642%×1.0 |
| 긴문맥 | 65.5 | +1.03 | 실측 | [[aa-lcr]] 81%×1.0 |
| 지시 따르기 | 74.5 | +1.63 | 실측 | [[ifbench]] 75.9864%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
