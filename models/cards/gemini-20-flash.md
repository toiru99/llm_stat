---
type: Model
title: Gemini 2.0 Flash
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.6, z: -0.5, r: 42.6, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.67, r: 40.0, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 17.8, z: -1.04, r: 34.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.68, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.46, r: 43.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Gemini 2.0 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.6 | -0.5 | 실측 | [[gpqa-diamond]] 62.3232%×0.4, [[humanitys-last-exam]] 4.26%×0.3 |
| 추론 | 40.0 | -0.67 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 62.3232%×1.0, [[humanitys-last-exam]] 4.26%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 34.5 | -1.04 | 실측 | [[tau2-bench]] 29.5322%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.68 | 실측 | [[aa-lcr]] 31.3333%×1.0 |
| 지시 따르기 | 43.1 | -0.46 | 실측 | [[ifbench]] 40.2041%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
