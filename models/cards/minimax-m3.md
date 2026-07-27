---
type: Model
title: MiniMax-M3
creator: MiniMax
license: Open
intelligence_index: 44.0
price_blended_usd_1m: None
output_speed_tps: 73.0
context_window: 1000000
status: current
size_class: Large
params_b: 428
is_reasoning: true
radar:
  knowledge: { s: 49.2, z: 0.38, r: 55.7, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.3, r: 69.5, estimated: false }  # 추론
  coding: { s: 71.2, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 64.8, z: 1.1, r: 66.5, estimated: false }  # 에이전트
  trust: { s: 95.4, z: 3.17, r: 97.5, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.96, r: 64.4, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.42, r: 71.3, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.94, r: 79.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# MiniMax-M3

MiniMax · Open · Large(428B) · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $None/1M · 73.0 t/s · TTFT 1.54s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.7 | +0.38 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 69.5 | +1.3 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 66.5 | +1.1 | 실측 | [[gdpval]] 45.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 13.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 97.5 | +3.17 | 실측 | [[aa-omniscience]] 84.0%×1.0 |
| 멀티모달 | 64.4 | +0.96 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 71.3 | +1.42 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 79.1 | +1.94 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
