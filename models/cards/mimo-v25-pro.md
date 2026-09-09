---
type: Model
title: MiMo-V2.5-Pro
creator: Xiaomi
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.1765
output_speed_tps: 36.0
context_window: 1000000
status: current
size_class: Large
params_b: 1023
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.49, r: 57.3, estimated: false }  # 전문 지식
  reasoning: { s: 54.1, z: 0.92, r: 63.7, estimated: false }  # 추론
  coding: { s: 72.1, z: 1.35, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 50.5, z: 0.5, r: 57.4, estimated: false }  # 에이전트
  trust: { s: 75.3, z: 2.38, r: 85.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.79, r: 76.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# MiMo-V2.5-Pro

Xiaomi · Open · Large(1023B) · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 36.0 t/s · TTFT 3.55s · 1M ctx` · 가성비 147.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.3 | +0.49 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 63.7 | +0.92 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 70.2 | +1.35 | 실측 | [[scicode]] 51.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 57.4 | +0.5 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 34.0%×1.0, [[itbench]] 38.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 85.7 | +2.38 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 76.9 | +1.79 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
