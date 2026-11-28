---
type: Model
title: Gemini 2.5 Flash (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.331
output_speed_tps: 166.960466986709
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.8, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.48, r: 42.8, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.0, z: -0.17, r: 47.4, estimated: false }  # 멀티모달
  long_context: { s: 56.3, z: -0.04, r: 49.3, estimated: false }  # 긴문맥
  instruction: { s: 37.7, z: -0.53, r: 42.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Gemini 2.5 Flash (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.331/1M · 166.960466986709 t/s · TTFT 0.615378002350011s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[gpqa-diamond]] 68.2828%×0.4, [[humanitys-last-exam]] 4.7266%×0.3 |
| 추론 | 42.8 | -0.48 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 68.2828%×1.0, [[humanitys-last-exam]] 4.7266%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 12.1212%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[tau2-bench]] 14.9123%×1.0, [[terminal-bench]] 12.1212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.4 | -0.17 | 실측 | [[mmmu-pro]] 65.4913%×1.0 |
| 긴문맥 | 49.3 | -0.04 | 실측 | [[aa-lcr]] 49.9%×1.0 |
| 지시 따르기 | 42.1 | -0.53 | 실측 | [[ifbench]] 38.9796%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
