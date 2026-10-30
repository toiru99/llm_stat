---
type: Model
title: MiMo-V2.6-Flash
creator: Xiaomi
license: Open
intelligence_index: 27.0
price_blended_usd_1m: 0.058
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.7, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 49.2, z: 0.16, r: 52.3, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.22, r: 68.2, estimated: false }  # 코딩
  agentic: { s: 86.5, z: 1.8, r: 77.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 49.2, z: -0.15, r: 47.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# MiMo-V2.6-Flash

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · 55.0 t/s · TTFT 3.34s · 1M ctx` · 가성비 465.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 52.3 | +0.16 | 실측 | [[critpt]] 30.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 68.2 | +1.22 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 77.0 | +1.8 | 실측 | [[gdpval]] 1614.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 47.8 | -0.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
