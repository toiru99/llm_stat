---
type: Model
title: MiMo-V2.6-Flash
creator: Xiaomi
license: Open
intelligence_index: 27.0
price_blended_usd_1m: 0.058
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.4, z: -0.02, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: -0.03, r: 49.5, estimated: false }  # 추론
  coding: { s: 73.0, z: 1.18, r: 67.8, estimated: false }  # 코딩
  agentic: { s: 86.5, z: 1.75, r: 76.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.35, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 51.3, z: -0.06, r: 49.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# MiMo-V2.6-Flash

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 465.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.02 | 실측 | [[humanitys-last-exam]] 35.1%×0.3 |
| 추론 | 49.5 | -0.03 | 실측 | [[critpt]] 29.5%×1.0, [[humanitys-last-exam]] 35.1%×1.0 |
| 코딩 | 67.8 | +1.18 | 실측 | [[scicode]] 51.3%×1.0 |
| 에이전트 | 76.3 | +1.75 | 실측 | [[gdpval]] 1614.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.2 | +0.35 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 74.3%×1.0 |
| 지시 따르기 | 49.0 | -0.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
