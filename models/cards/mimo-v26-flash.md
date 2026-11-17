---
type: Model
title: MiMo-V2.6-Flash
creator: Xiaomi
license: Open
intelligence_index: 26.7276981444568
price_blended_usd_1m: 0.058
output_speed_tps: 42.322358124208584
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.5, z: -0.03, r: 49.5, estimated: false }  # 전문 지식
  reasoning: { s: 40.0, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 73.0, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 88.9, z: 1.54, r: 73.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.36, r: 55.4, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 48.3, z: -0.23, r: 46.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# MiMo-V2.6-Flash

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **26.7276981444568**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · 42.322358124208584 t/s · TTFT 5.17038126377316s · 1M ctx` · 가성비 460.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.5 | -0.03 | 실측 | [[humanitys-last-exam]] 35.0787766450417%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 12.0%×1.0, [[humanitys-last-exam]] 35.0787766450417%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 51.273148148148195%×1.0 |
| 에이전트 | 73.0 | +1.54 | 실측 | [[gdpval]] 1614.74%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.4 | +0.36 | 실측 | [[mmmu-pro]] 73.06358381502889%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 74.3333333333333%×1.0 |
| 지시 따르기 | 46.6 | -0.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
