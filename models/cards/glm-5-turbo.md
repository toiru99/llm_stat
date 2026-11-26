---
type: Model
title: GLM-5-Turbo
creator: Z AI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.2, z: 0.89, r: 63.4, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 50.6, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 75.0, z: 0.98, r: 64.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 85.8, z: 1.47, r: 72.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5-Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GLM-5-Turbo

Z AI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.4 | +0.89 | 실측 | [[gpqa-diamond]] 84.7475%×0.4, [[humanitys-last-exam]] 27.7572%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 84.7475%×1.0, [[humanitys-last-exam]] 27.7572%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[terminal-bench]] 33.3333%×0.5 |
| 에이전트 | 64.8 | +0.98 | 실측 | [[tau2-bench]] 98.538%×1.0, [[terminal-bench]] 33.3333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 71.6667%×1.0 |
| 지시 따르기 | 72.0 | +1.47 | 실측 | [[ifbench]] 73.1973%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
