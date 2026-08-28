---
type: Model
title: MiMo-V2.5-Pro
creator: Xiaomi
license: Open
intelligence_index: 43.0
price_blended_usd_1m: 0.1765
output_speed_tps: 38.0
context_window: 1000000
status: current
size_class: Large
params_b: 1023
is_reasoning: true
radar:
  knowledge: { s: 52.7, z: 0.6, r: 58.9, estimated: false }  # 전문 지식
  reasoning: { s: 56.0, z: 1.09, r: 66.3, estimated: false }  # 추론
  coding: { s: 77.3, z: 1.24, r: 68.7, estimated: false }  # 코딩
  agentic: { s: 51.1, z: 0.56, r: 58.4, estimated: false }  # 에이전트
  trust: { s: 75.3, z: 2.42, r: 86.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.37, r: 70.6, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.83, r: 77.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# MiMo-V2.5-Pro

Xiaomi · Open · Large(1023B) · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 38.0 t/s · TTFT 3.98s · 1M ctx` · 가성비 243.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.9 | +0.6 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 66.3 | +1.09 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 68.7 | +1.24 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 58.4 | +0.56 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 38.0%×1.0, [[itbench]] 38.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 86.3 | +2.42 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.6 | +1.37 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 77.4 | +1.83 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
