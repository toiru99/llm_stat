---
type: Model
title: Gemini 3 Pro Preview (low)
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
  knowledge: { s: 68.8, z: 1.07, r: 66.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.3, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 60.2, z: 0.46, r: 56.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 52.7, z: 0.09, r: 51.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemini 3 Pro Preview (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.0 | +1.07 | 실측 | [[gpqa-diamond]] 88.6869%×0.4, [[humanitys-last-exam]] 29.4717%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 88.6869%×1.0, [[humanitys-last-exam]] 29.4717%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 34.0909%×0.5 |
| 에이전트 | 56.9 | +0.46 | 실측 | [[tau2-bench]] 68.1287%×1.0, [[terminal-bench]] 34.0909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 74%×1.0 |
| 지시 따르기 | 51.4 | +0.09 | 실측 | [[ifbench]] 49.6599%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
