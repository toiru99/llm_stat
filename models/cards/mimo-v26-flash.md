---
type: Model
title: MiMo-V2.6-Flash
creator: Xiaomi
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.058
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.1, z: 0.11, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.54, r: 58.1, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.33, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 82.1, z: 1.7, r: 75.6, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.92, r: 63.8, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.45, r: 56.8, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 54.3, z: 0.03, r: 50.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# MiMo-V2.6-Flash

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · 59.0 t/s · TTFT 3.49s · 1M ctx` · 가성비 655.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.11 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 58.1 | +0.54 | 실측 | [[critpt]] 12.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 69.9 | +1.33 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 75.6 | +1.7 | 실측 | [[gdpval]] 55.0%×1.0 |
| 신뢰성 | 63.8 | +0.92 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 56.8 | +0.45 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 50.4 | +0.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
