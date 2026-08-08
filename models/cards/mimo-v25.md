---
type: Model
title: MiMo-V2.5
creator: Xiaomi
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.058
output_speed_tps: 90.0
context_window: 1000000
status: current
size_class: Large
params_b: 310
is_reasoning: true
radar:
  knowledge: { s: 44.2, z: 0.17, r: 52.5, estimated: false }  # 전문 지식
  reasoning: { s: 50.0, z: 0.75, r: 61.2, estimated: false }  # 추론
  coding: { s: 69.0, z: 0.9, r: 63.5, estimated: false }  # 코딩
  agentic: { s: 55.6, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: 76.7, z: 2.31, r: 84.7, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.67, r: 60.1, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# MiMo-V2.5

Xiaomi · Open · Large(310B) · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · 90.0 t/s · TTFT 3.02s · 1M ctx` · 가성비 655.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.5 | +0.17 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 61.2 | +0.75 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 63.5 | +0.9 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 91.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 84.7 | +2.31 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | 60.1 | +0.67 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
