---
type: Model
title: Gemma 4 E4B
creator: Google
license: Open
intelligence_index: 4.78077714822335
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 8
is_reasoning: true
radar:
  knowledge: { s: 33.1, z: -0.66, r: 40.1, estimated: false }  # 전문 지식
  reasoning: { s: 20.2, z: -0.74, r: 38.8, estimated: false }  # 추론
  coding: { s: 23.4, z: -0.6, r: 41.1, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 49.2, z: -1.13, r: 33.0, estimated: false }  # 멀티모달
  long_context: { s: 36.1, z: -0.66, r: 40.0, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemma 4 E4B

Google · Open · Small(8B) · 컨텍스트 128k · 종합지능 **4.78077714822335**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.1 | -0.66 | 실측 | [[gpqa-diamond]] 57.5758%×0.4, [[humanitys-last-exam]] 3.75348%×0.3 |
| 추론 | 38.8 | -0.74 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 57.5758%×1.0, [[humanitys-last-exam]] 3.75348%×1.0 |
| 코딩 | 41.1 | -0.6 | 실측 | [[scicode]] 24.4213%×1.0, [[terminal-bench]] 8.33333%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[gdpval]] -29.69 Elo×1.0, [[tau2-bench]] 20.7602%×1.0, [[terminal-bench]] 8.33333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 33.0 | -1.13 | 실측 | [[mmmu-pro]] 51.3873%×1.0 |
| 긴문맥 | 40.0 | -0.66 | 실측 | [[aa-lcr]] 32%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 44.2177%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
