---
type: Model
title: Gemini 3 Pro Preview (high)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.41, r: 71.1, estimated: false }  # 전문 지식
  reasoning: { s: 57.4, z: 1.09, r: 66.3, estimated: false }  # 추론
  coding: { s: 63.2, z: 0.8, r: 62.0, estimated: false }  # 코딩
  agentic: { s: 75.6, z: 1.07, r: 66.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.9, z: 0.85, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.18, r: 67.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 3 Pro Preview (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.1 | +1.41 | 실측 | [[gpqa-diamond]] 90.8080808080808%×0.4, [[humanitys-last-exam]] 39.7126969416126%×0.3 |
| 추론 | 66.3 | +1.09 | 실측 | [[critpt]] 9.14285714285714%×1.0, [[gpqa-diamond]] 90.8080808080808%×1.0, [[humanitys-last-exam]] 39.7126969416126%×1.0 |
| 코딩 | 62.0 | +0.8 | 실측 | [[terminal-bench]] 41.6666666666667%×0.5 |
| 에이전트 | 66.1 | +1.07 | 실측 | [[tau2-bench]] 87.1345029239766%×1.0, [[terminal-bench]] 41.6666666666667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.7 | +0.85 | 실측 | [[mmmu-pro]] 80.1734104046243%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 실측 | [[ifbench]] 70.4081632653061%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
