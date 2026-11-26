---
type: Model
title: Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2025
output_speed_tps: 193.048958943361
context_window: 1000000
status: past
size_class: Medium
params_b: 120.6
is_reasoning: true
radar:
  knowledge: { s: 57.9, z: 0.54, r: 58.1, estimated: false }  # 전문 지식
  reasoning: { s: 39.0, z: 0.19, r: 52.8, estimated: false }  # 추론
  coding: { s: 46.7, z: 0.19, r: 52.8, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.15, r: 47.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.1, z: 0.5, r: 57.5, estimated: false }  # 긴문맥
  instruction: { s: 83.4, z: 1.37, r: 70.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Nemotron 3 Super

NVIDIA · Open · Medium(120.6B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2025/1M · 193.048958943361 t/s · TTFT 1.01984648991674s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.1 | +0.54 | 실측 | [[gpqa-diamond]] 80%×0.4, [[humanitys-last-exam]] 20.76%×0.3 |
| 추론 | 52.8 | +0.19 | 실측 | [[critpt]] 3.14286%×1.0, [[gpqa-diamond]] 80%×1.0, [[humanitys-last-exam]] 20.76%×1.0 |
| 코딩 | 52.8 | +0.19 | 실측 | [[scicode]] 36.2269%×1.0, [[terminal-bench]] 28.7879%×0.5 |
| 에이전트 | 47.8 | -0.15 | 실측 | [[gdpval]] 497.18 Elo×1.0, [[tau2-bench]] 67.8363%×1.0, [[tau3-banking]] 10.3093%×1.0, [[terminal-bench]] 28.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.5 | +0.5 | 실측 | [[aa-lcr]] 65.6667%×1.0 |
| 지시 따르기 | 70.5 | +1.37 | 실측 | [[ifbench]] 71.4966%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
