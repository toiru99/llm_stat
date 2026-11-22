---
type: Model
title: MiMo-V2.6-Pro
creator: Xiaomi
license: Open
intelligence_index: 29.8897833093321
price_blended_usd_1m: 0.1765
output_speed_tps: 51.0026058407311
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.9, z: 0.9, r: 63.5, estimated: false }  # 전문 지식
  reasoning: { s: 70.2, z: 1.71, r: 75.6, estimated: false }  # 추론
  coding: { s: 88.8, z: 1.65, r: 74.8, estimated: false }  # 코딩
  agentic: { s: 92.3, z: 1.64, r: 74.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.3, r: 69.5, estimated: false }  # 긴문맥
  instruction: { s: 75.7, z: 0.91, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# MiMo-V2.6-Pro

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **29.8897833093321**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.435 · 출력 $0.87 · 혼합 $0.1765/1M · 51.0026058407311 t/s · TTFT 8.14614982791001s · 1M ctx` · 가성비 169.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.5 | +0.9 | 실측 | [[humanitys-last-exam]] 49.351251158480096%×0.3 |
| 추론 | 75.6 | +1.71 | 실측 | [[critpt]] 26.5714285714286%×1.0, [[humanitys-last-exam]] 49.351251158480096%×1.0 |
| 코딩 | 74.8 | +1.65 | 실측 | [[scicode]] 60.8796296296296%×1.0 |
| 에이전트 | 74.6 | +1.64 | 실측 | [[gdpval]] 1692.11%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.5 | +1.3 | 실측 | [[aa-lcr]] 86.3333333333333%×1.0 |
| 지시 따르기 | 63.7 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
