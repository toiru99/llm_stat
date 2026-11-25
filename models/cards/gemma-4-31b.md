---
type: Model
title: Gemma 4 31B
creator: Google
license: Open
intelligence_index: 4.38438284215374
price_blended_usd_1m: 0
output_speed_tps: 35.5092941188132
context_window: 256000
status: current
size_class: Small
params_b: 30.7
is_reasoning: true
radar:
  knowledge: { s: 63.3, z: 0.81, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 40.9, z: 0.28, r: 54.2, estimated: false }  # 추론
  coding: { s: 60.7, z: 0.66, r: 59.9, estimated: false }  # 코딩
  agentic: { s: 47.4, z: 0.01, r: 50.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: 89.1, z: 1.61, r: 74.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemma 4 31B

Google · Open · Small(30.7B) · 컨텍스트 256k · 종합지능 **4.38438284215374**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 35.5092941188132 t/s · TTFT 0.958140898264728s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.81 | 실측 | [[gpqa-diamond]] 85.6566%×0.4, [[humanitys-last-exam]] 23.633%×0.3 |
| 추론 | 54.2 | +0.28 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 85.6566%×1.0, [[humanitys-last-exam]] 23.633%×1.0 |
| 코딩 | 59.9 | +0.66 | 실측 | [[scicode]] 45.4861%×1.0, [[terminal-bench]] 36.3636%×0.5 |
| 에이전트 | 50.2 | +0.01 | 실측 | [[gdpval]] 626.63 Elo×1.0, [[tau2-bench]] 59.9415%×1.0, [[tau3-banking]] 14.8454%×1.0, [[terminal-bench]] 36.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 73.4104%×1.0 |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 69.6667%×1.0 |
| 지시 따르기 | 74.1 | +1.61 | 실측 | [[ifbench]] 75.5782%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
