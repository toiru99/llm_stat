---
type: Model
title: Nex-N2-Pro
creator: Nex AGI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: 397
is_reasoning: true
radar:
  knowledge: { s: 71.6, z: 1.21, r: 68.1, estimated: false }  # 전문 지식
  reasoning: { s: 53.5, z: 0.91, r: 63.7, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.49, r: 57.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 1.06, r: 65.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nex-N2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Nex-N2-Pro

Nex AGI · Open · Large(397B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.1 | +1.21 | 실측 | [[gpqa-diamond]] 89.1919%×0.4, [[humanitys-last-exam]] 33.7349%×0.3 |
| 추론 | 63.7 | +0.91 | 실측 | [[critpt]] 8.57143%×1.0, [[gpqa-diamond]] 89.1919%×1.0, [[humanitys-last-exam]] 33.7349%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[scicode]] 43.287%×1.0 |
| 에이전트 | 57.3 | +0.49 | 실측 | [[gdpval]] 1109.53 Elo×1.0, [[tau2-bench]] 81.5789%×1.0, [[tau3-banking]] 17.5258%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 81.6667%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 실측 | [[ifbench]] 66.1905%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
