---
type: Model
title: MiniMax-M3
creator: MiniMax
license: Open
intelligence_index: 45.0
price_blended_usd_1m: 0.222
output_speed_tps: 107.0
context_window: 1000000
status: current
size_class: Large
params_b: 428
is_reasoning: true
radar:
  knowledge: { s: 50.1, z: 0.42, r: 56.3, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.22, r: 68.2, estimated: false }  # 추론
  coding: { s: 71.2, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 62.2, z: 1.01, r: 65.1, estimated: false }  # 에이전트
  trust: { s: 93.0, z: 2.91, r: 93.7, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.92, r: 63.8, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.39, r: 70.9, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.86, r: 78.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# MiniMax-M3

MiniMax · Open · Large(428B) · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 107.0 t/s · TTFT 1.49s · 1M ctx` · 가성비 202.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.3 | +0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 68.2 | +1.22 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 65.1 | +1.01 | 실측 | [[gdpval]] 44.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 93.7 | +2.91 | 실측 | [[aa-omniscience]] 82.0%×1.0 |
| 멀티모달 | 63.8 | +0.92 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 70.9 | +1.39 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 78.0 | +1.86 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
