---
type: Model
title: MiMo-V2.5-Pro
creator: Xiaomi
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.18
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.3, z: 0.66, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 55.9, z: 1.17, r: 67.5, estimated: false }  # 추론
  coding: { s: 77.3, z: 1.31, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 52.9, z: 0.64, r: 59.7, estimated: false }  # 에이전트
  trust: { s: 87.1, z: 2.8, r: 91.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 96.1, z: 1.4, r: 71.0, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.79, r: 76.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# MiMo-V2.5-Pro

Xiaomi · Open · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.18/1M · 59.0 t/s · TTFT 2.71s · 1M ctx` · 가성비 233.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.66 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 67.5 | +1.17 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 69.6 | +1.31 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 59.7 | +0.64 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 38.0%×1.0, [[itbench]] 38.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 91.9 | +2.8 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 71.0 | +1.4 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 76.8 | +1.79 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
