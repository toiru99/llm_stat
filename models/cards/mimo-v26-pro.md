---
type: Model
title: MiMo-V2.6-Pro
creator: Xiaomi
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.1765
output_speed_tps: 49.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.0, z: 1.35, r: 70.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.6, z: 0.81, r: 62.2, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.77, r: 76.6, estimated: false }  # 코딩
  agentic: { s: 90.5, z: 1.94, r: 79.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 96.6, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.79, r: 61.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# MiMo-V2.6-Pro

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 49.0 t/s · TTFT 3.09s · 1M ctx` · 가성비 170.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.2 | +1.35 | 실측 | [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 62.2 | +0.81 | 실측 | [[critpt]] 34.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 76.6 | +1.77 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 79.0 | +1.94 | 실측 | [[gdpval]] 1689.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 86.0%×1.0 |
| 지시 따르기 | 61.8 | +0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
