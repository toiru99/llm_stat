---
type: Model
title: Nemotron 3.5 Lightning
creator: NVIDIA
license: Open
intelligence_index: 5.5346663903388
price_blended_usd_1m: 0.0565
output_speed_tps: 318.69785300399997
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 48.2, z: 0.07, r: 51.1, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.3, r: 45.6, estimated: false }  # 추론
  coding: { s: 41.3, z: 0.01, r: 50.1, estimated: false }  # 코딩
  agentic: { s: 31.6, z: -0.55, r: 41.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.0, z: 0.32, r: 54.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Lightning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Nemotron 3.5 Lightning

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **5.5346663903388**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.2 · 혼합 $0.0565/1M · 318.69785300399997 t/s · TTFT 0.756560139256818s · 1M ctx` · 가성비 98.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.1 | +0.07 | 실측 | [[gpqa-diamond]] 74.3434%×0.4, [[humanitys-last-exam]] 10.5653%×0.3 |
| 추론 | 45.6 | -0.3 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 74.3434%×1.0, [[humanitys-last-exam]] 10.5653%×1.0 |
| 코딩 | 50.1 | +0.01 | 실측 | [[scicode]] 32.0602%×1.0 |
| 에이전트 | 41.8 | -0.55 | 실측 | [[gdpval]] 645.28 Elo×1.0, [[tau3-banking]] 8.86598%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.8 | +0.32 | 실측 | [[aa-lcr]] 60.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
