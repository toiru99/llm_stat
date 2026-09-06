---
type: Model
title: MiMo-V2.5
creator: Xiaomi
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.058
output_speed_tps: 54.0
context_window: 1000000
status: current
size_class: Large
params_b: 310
is_reasoning: true
radar:
  knowledge: { s: 43.4, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 48.2, z: 0.63, r: 59.5, estimated: false }  # 추론
  coding: { s: 62.0, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 54.7, z: 0.66, r: 59.9, estimated: false }  # 에이전트
  trust: { s: 68.0, z: 2.06, r: 80.8, estimated: false }  # 신뢰성
  multimodal: { s: 83.3, z: 0.65, r: 59.8, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# MiMo-V2.5

Xiaomi · Open · Large(310B) · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · 54.0 t/s · TTFT 4.08s · 1M ctx` · 가성비 517.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 59.5 | +0.63 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 59.9 | +0.66 | 실측 | [[gdpval]] 29.0%×1.0, [[tau2-bench]] 91.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 80.8 | +2.06 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | 59.8 | +0.65 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
