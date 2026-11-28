---
type: Model
title: Nemotron 3 Ultra
creator: NVIDIA
license: Open
intelligence_index: 11.7592726308177
price_blended_usd_1m: 0.417
output_speed_tps: 196.61915080704648
context_window: 262144
status: current
size_class: Large
params_b: 550
is_reasoning: true
radar:
  knowledge: { s: 66.8, z: 0.97, r: 64.6, estimated: false }  # 전문 지식
  reasoning: { s: 45.0, z: 0.49, r: 57.3, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.47, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 57.3, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.95, r: 79.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Nemotron 3 Ultra

NVIDIA · Open · Large(550B) · 컨텍스트 262k · 종합지능 **11.7592726308177**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.55 · 출력 $2.3 · 혼합 $0.417/1M · 196.61915080704648 t/s · TTFT 1.18626086915773s · 262k ctx` · 가성비 28.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.6 | +0.97 | 실측 | [[gpqa-diamond]] 86.6667%×0.4, [[humanitys-last-exam]] 28.4059%×0.3 |
| 추론 | 57.3 | +0.49 | 실측 | [[critpt]] 3.14286%×1.0, [[gpqa-diamond]] 86.6667%×1.0, [[humanitys-last-exam]] 28.4059%×1.0 |
| 코딩 | 57.0 | +0.47 | 실측 | [[scicode]] 40.2778%×1.0, [[terminal-bench]] 36.3636%×0.5 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[gdpval]] 1020.29 Elo×1.0, [[tau2-bench]] 83.3333%×1.0, [[tau3-banking]] 14.2268%×1.0, [[terminal-bench]] 36.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | 79.2 | +1.95 | 실측 | [[ifbench]] 81.3605%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
