---
type: Model
title: MiniMax M1 40k
creator: MiniMax
license: Open
intelligence_index: 14.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.2, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: 0.39, r: 55.9, estimated: false }  # 추론
  coding: { s: 43.2, z: -0.14, r: 48.0, estimated: false }  # 코딩
  agentic: { s: 17.7, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 20.8, z: -0.31, r: 45.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.4, z: 0.57, r: 58.6, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 40k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# MiniMax M1 40k

MiniMax · Open · Unknown · 컨텍스트 1M · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 55.9 | +0.39 | 실측 | [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 48.0 | -0.14 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 45.4 | -0.31 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.6 | +0.57 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 42.6 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
