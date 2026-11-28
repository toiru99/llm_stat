---
type: Model
title: Llama 3 70B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.86
output_speed_tps: 46.9501184559552
context_window: 8192
status: past
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 20.6, z: -1.27, r: 30.9, estimated: false }  # 전문 지식
  reasoning: { s: 12.4, z: -1.13, r: 33.0, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 0.6, z: -1.64, r: 25.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 35.1, z: -0.64, r: 40.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Llama 3 70B

Meta · Open · Medium(70B) · 컨텍스트 8k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.65 · 출력 $2.75 · 혼합 $0.86/1M · 46.9501184559552 t/s · TTFT 0.572060644333218s · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 30.9 | -1.27 | 실측 | [[gpqa-diamond]] 37.8788%×0.4, [[humanitys-last-exam]] 4.52%×0.3 |
| 추론 | 33.0 | -1.13 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 37.8788%×1.0, [[humanitys-last-exam]] 4.52%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 25.4 | -1.64 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 40.4 | -0.64 | 실측 | [[ifbench]] 37.0748%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
