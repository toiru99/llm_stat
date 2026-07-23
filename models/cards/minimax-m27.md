---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: 38.0
price_blended_usd_1m: None
output_speed_tps: 56.0
context_window: 205000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.2, z: 0.7, r: 60.5, estimated: false }  # 전문 지식
  reasoning: { s: 48.9, z: 0.79, r: 61.9, estimated: false }  # 추론
  coding: { s: 71.9, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 48.8, z: 0.48, r: 57.3, estimated: false }  # 에이전트
  trust: { s: 74.7, z: 2.25, r: 83.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.55, r: 73.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · Unknown · 컨텍스트 205k · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $None/1M · 56.0 t/s · TTFT 1.63s · 205k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.5 | +0.7 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 61.9 | +0.79 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 57.3 | +0.48 | 실측 | [[apex-agents]] 11.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 26.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 83.8 | +2.25 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 73.2 | +1.55 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
