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
  knowledge: { s: 76.2, z: 1.43, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 57.4, z: 1.1, r: 66.5, estimated: false }  # 추론
  coding: { s: 63.2, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 75.6, z: 1.0, r: 65.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.6, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.31, r: 69.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Gemini 3 Pro Preview (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.43 | 실측 | [[gpqa-diamond]] 90.8081%×0.4, [[humanitys-last-exam]] 39.7127%×0.3 |
| 추론 | 66.5 | +1.1 | 실측 | [[critpt]] 9.14286%×1.0, [[gpqa-diamond]] 90.8081%×1.0, [[humanitys-last-exam]] 39.7127%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[terminal-bench]] 41.6667%×0.5 |
| 에이전트 | 65.1 | +1.0 | 실측 | [[tau2-bench]] 87.1345%×1.0, [[terminal-bench]] 41.6667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.1734%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 76%×1.0 |
| 지시 따르기 | 69.6 | +1.31 | 실측 | [[ifbench]] 70.4082%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
