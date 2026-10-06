---
type: Model
title: MiniMax-M3
creator: MiniMax
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.222
output_speed_tps: 103.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.8, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 57.4, z: 0.95, r: 64.3, estimated: false }  # 추론
  coding: { s: 65.7, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 59.3, z: 0.78, r: 61.8, estimated: false }  # 에이전트
  trust: { s: 82.5, z: 2.59, r: 88.9, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.81, r: 62.2, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.9, r: 78.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# MiniMax-M3

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 103.0 t/s · TTFT 2.05s · 1M ctx` · 가성비 130.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 64.3 | +0.95 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 61.8 | +0.78 | 실측 | [[gdpval]] 37.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 88.9 | +2.59 | 실측 | [[aa-omniscience]] 82.0%×1.0 |
| 멀티모달 | 62.2 | +0.81 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 78.4 | +1.9 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
