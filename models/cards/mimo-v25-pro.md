---
type: Model
title: MiMo-V2.5-Pro
creator: Xiaomi
license: Open
intelligence_index: 42.0
price_blended_usd_1m: None
output_speed_tps: 62.0
context_window: 1000000
status: current
size_class: Large
params_b: 1023
is_reasoning: true
radar:
  knowledge: { s: 54.3, z: 0.62, r: 59.3, estimated: false }  # 전문 지식
  reasoning: { s: 55.9, z: 1.08, r: 66.2, estimated: false }  # 추론
  coding: { s: 77.3, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 52.1, z: 0.61, r: 59.1, estimated: false }  # 에이전트
  trust: { s: 85.1, z: 2.68, r: 90.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 96.1, z: 1.38, r: 70.7, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.76, r: 76.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# MiMo-V2.5-Pro

Xiaomi · Open · Large(1023B) · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $None/1M · 62.0 t/s · TTFT 2.78s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.3 | +0.62 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 66.2 | +1.08 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 59.1 | +0.61 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 38.0%×1.0, [[itbench]] 38.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 90.2 | +2.68 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.7 | +1.38 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 76.5 | +1.76 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
