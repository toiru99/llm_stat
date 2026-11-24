---
type: Model
title: Gemma 4 E2B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 5.1
is_reasoning: true
radar:
  knowledge: { s: 24.3, z: -1.09, r: 33.6, estimated: false }  # 전문 지식
  reasoning: { s: 14.6, z: -1.02, r: 34.7, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.23, r: 31.6, estimated: false }  # 코딩
  agentic: { s: 11.8, z: -1.25, r: 31.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 40.1, z: -1.6, r: 26.0, estimated: false }  # 멀티모달
  long_context: { s: 18.4, z: -1.2, r: 31.9, estimated: false }  # 긴문맥
  instruction: { s: 36.4, z: -0.58, r: 41.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemma 4 E2B

Google · Open · Small(5.1B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.6 | -1.09 | 실측 | [[gpqa-diamond]] 43.3333%×0.4, [[humanitys-last-exam]] 4.77294%×0.3 |
| 추론 | 34.7 | -1.02 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 43.3333%×1.0, [[humanitys-last-exam]] 4.77294%×1.0 |
| 코딩 | 31.6 | -1.23 | 실측 | [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 31.3 | -1.25 | 실측 | [[gdpval]] -180.95 Elo×1.0, [[tau2-bench]] 20.7602%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 26.0 | -1.6 | 실측 | [[mmmu-pro]] 44.5665%×1.0 |
| 긴문맥 | 31.9 | -1.2 | 실측 | [[aa-lcr]] 16.3333%×1.0 |
| 지시 따르기 | 41.2 | -0.58 | 실측 | [[ifbench]] 38.0272%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
