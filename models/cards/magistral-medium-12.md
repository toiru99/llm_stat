---
type: Model
title: Magistral Medium 1.2
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.8, z: 0.05, r: 50.7, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.3, r: 45.6, estimated: false }  # 추론
  coding: { s: 19.5, z: -0.73, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 27.0, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.2, z: -0.57, r: 41.4, estimated: false }  # 멀티모달
  long_context: { s: 59.8, z: 0.06, r: 51.0, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.29, r: 45.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Medium 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Magistral Medium 1.2

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.7 | +0.05 | 실측 | [[gpqa-diamond]] 73.9394%×0.4, [[humanitys-last-exam]] 10.2873%×0.3 |
| 추론 | 45.6 | -0.3 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 73.9394%×1.0, [[humanitys-last-exam]] 10.2873%×1.0 |
| 코딩 | 39.1 | -0.73 | 실측 | [[terminal-bench]] 12.8788%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[gdpval]] 175.47 Elo×1.0, [[tau2-bench]] 52.0468%×1.0, [[tau3-banking]] 5.56701%×1.0, [[terminal-bench]] 12.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 41.4 | -0.57 | 실측 | [[mmmu-pro]] 59.6532%×1.0 |
| 긴문맥 | 51.0 | +0.06 | 실측 | [[aa-lcr]] 53%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 실측 | [[ifbench]] 42.9932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
