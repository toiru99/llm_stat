---
type: Model
title: MiMo-V2.5-Pro (Non-reasoning)
creator: Xiaomi
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.1765
output_speed_tps: 34.0
context_window: 1000000
status: current
size_class: Large
params_b: 1023
is_reasoning: false
radar:
  knowledge: { s: 46.2, z: 0.28, r: 54.1, estimated: false }  # 전문 지식
  reasoning: { s: 35.0, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 60.1, z: 0.55, r: 58.2, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 1.04, r: 65.5, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.73, r: 39.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.1, r: 48.5, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# MiMo-V2.5-Pro (Non-reasoning)

Xiaomi · Open · Large(1023B) · 컨텍스트 1M · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 34.0 t/s · TTFT 3.3s · 1M ctx` · 가성비 158.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.1 | +0.28 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 58.2 | +0.55 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 65.5 | +1.04 | 실측 | [[tau2-bench]] 73.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 39.1 | -0.73 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.5 | -0.1 | 실측 | [[aa-lcr]] 39.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
