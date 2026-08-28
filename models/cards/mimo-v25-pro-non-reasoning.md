---
type: Model
title: MiMo-V2.5-Pro (Non-reasoning)
creator: Xiaomi
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.1765
output_speed_tps: 36.0
context_window: 1000000
status: current
size_class: Large
params_b: 1023
is_reasoning: false
radar:
  knowledge: { s: 47.3, z: 0.33, r: 54.9, estimated: false }  # 전문 지식
  reasoning: { s: 35.6, z: 0.06, r: 50.8, estimated: false }  # 추론
  coding: { s: 61.5, z: 0.58, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 1.07, r: 66.0, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.07, r: 48.9, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.36, r: 44.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# MiMo-V2.5-Pro (Non-reasoning)

Xiaomi · Open · Large(1023B) · 컨텍스트 1M · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 36.0 t/s · TTFT 7.55s · 1M ctx` · 가성비 158.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.9 | +0.33 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 50.8 | +0.06 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 58.8 | +0.58 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 66.0 | +1.07 | 실측 | [[tau2-bench]] 73.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.9 | -0.07 | 실측 | [[aa-lcr]] 39.0%×1.0 |
| 지시 따르기 | 44.6 | -0.36 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
