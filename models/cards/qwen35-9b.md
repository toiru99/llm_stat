---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1415
output_speed_tps: 84.1829532739396
context_window: 262144
status: current
size_class: Small
params_b: 9.7
is_reasoning: true
radar:
  knowledge: { s: 54.9, z: 0.4, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.9, z: -0.06, r: 49.0, estimated: false }  # 추론
  coding: { s: 37.0, z: -0.14, r: 48.0, estimated: false }  # 코딩
  agentic: { s: 43.6, z: -0.12, r: 48.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 76.7, z: 1.09, r: 66.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · Small(9.7B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.135 · 출력 $0.2 · 혼합 $0.1415/1M · 84.1829532739396 t/s · TTFT 2.520621423833645s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.4 | 실측 | [[gpqa-diamond]] 80.6061%×0.4, [[humanitys-last-exam]] 14.9212%×0.3 |
| 추론 | 49.0 | -0.06 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 80.6061%×1.0, [[humanitys-last-exam]] 14.9212%×1.0 |
| 코딩 | 48.0 | -0.14 | 실측 | [[scicode]] 29.5139%×1.0, [[terminal-bench]] 24.2424%×0.5 |
| 에이전트 | 48.1 | -0.12 | 실측 | [[gdpval]] 426.25 Elo×1.0, [[tau2-bench]] 86.8421%×1.0, [[tau3-banking]] 7.01031%×1.0, [[terminal-bench]] 24.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.2486%×1.0 |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 70%×1.0 |
| 지시 따르기 | 66.4 | +1.09 | 실측 | [[ifbench]] 66.7347%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
