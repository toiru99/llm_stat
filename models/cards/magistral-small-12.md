---
type: Model
title: Magistral Small 1.2
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.6
output_speed_tps: 63.6188859257122
context_window: 128000
status: current
size_class: Small
params_b: 24
is_reasoning: true
radar:
  knowledge: { s: 40.5, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.7, z: -0.85, r: 37.2, estimated: false }  # 멀티모달
  long_context: { s: 21.8, z: -1.1, r: 33.5, estimated: false }  # 긴문맥
  instruction: { s: 45.3, z: -0.21, r: 46.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Magistral Small 1.2

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · 63.6188859257122 t/s · TTFT 3.02953811049937s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[gpqa-diamond]] 66.2626%×0.4, [[humanitys-last-exam]] 6.44115%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 66.2626%×1.0, [[humanitys-last-exam]] 6.44115%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[gdpval]] 11.27 Elo×1.0, [[tau2-bench]] 27.7778%×1.0, [[tau3-banking]] 4.53608%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.2 | -0.85 | 실측 | [[mmmu-pro]] 55.4913%×1.0 |
| 긴문맥 | 33.5 | -1.1 | 실측 | [[aa-lcr]] 19.3333%×1.0 |
| 지시 따르기 | 46.8 | -0.21 | 실측 | [[ifbench]] 44.3537%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
