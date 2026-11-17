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
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.6, z: 1.18, r: 67.8, estimated: false }  # 전문 지식
  reasoning: { s: 53.5, z: 0.9, r: 63.5, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.68, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 0.93, r: 64.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nex-N2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nex-N2-Pro

Nex AGI · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.8 | +1.18 | 실측 | [[gpqa-diamond]] 89.1919191919192%×0.4, [[humanitys-last-exam]] 33.734939759036095%×0.3 |
| 추론 | 63.5 | +0.9 | 실측 | [[critpt]] 8.57142857142857%×1.0, [[gpqa-diamond]] 89.1919191919192%×1.0, [[humanitys-last-exam]] 33.734939759036095%×1.0 |
| 코딩 | 60.3 | +0.68 | 실측 | [[scicode]] 43.287037037037%×1.0 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[gdpval]] 1109.21%×1.0, [[tau2-bench]] 81.5789473684211%×1.0, [[tau3-banking]] 17.5257731958763%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 81.6666666666667%×1.0 |
| 지시 따르기 | 64.0 | +0.93 | 실측 | [[ifbench]] 66.1904761904762%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
