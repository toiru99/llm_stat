---
type: Model
title: Grok 4.20 0309 v2 (non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.64
output_speed_tps: 133.089828914458
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 60.5, z: 0.64, r: 59.5, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.15, r: 52.2, estimated: false }  # 추론
  coding: { s: 25.3, z: -0.5, r: 42.5, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.07, r: 48.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.2, z: -0.21, r: 46.8, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.81, r: 37.8, estimated: false }  # 긴문맥
  instruction: { s: 52.2, z: -0.07, r: 49.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.20 0309 v2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Grok 4.20 0309 v2 (non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 133.089828914458 t/s · TTFT 1.20729682615188s · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.5 | +0.64 | 실측 | [[gpqa-diamond]] 77.57575757575759%×0.4, [[humanitys-last-exam]] 27.9425393883225%×0.3 |
| 추론 | 52.2 | +0.15 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 77.57575757575759%×1.0, [[humanitys-last-exam]] 27.9425393883225%×1.0 |
| 코딩 | 42.5 | -0.5 | 실측 | [[terminal-bench]] 16.6666666666667%×0.5 |
| 에이전트 | 48.9 | -0.07 | 실측 | [[tau2-bench]] 59.9415204678363%×1.0, [[terminal-bench]] 16.6666666666667%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.8 | -0.21 | 실측 | [[mmmu-pro]] 64.91329479768791%×1.0 |
| 긴문맥 | 37.8 | -0.81 | 실측 | [[aa-lcr]] 23.3333333333333%×1.0 |
| 지시 따르기 | 49.0 | -0.07 | 실측 | [[ifbench]] 49.319727891156504%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
