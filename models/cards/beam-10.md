---
type: Model
title: Beam 1.0
creator: Reflection
license: Open
intelligence_index: 17.7307282547205
price_blended_usd_1m: 0.228
output_speed_tps: 271.89723637255213
context_window: 1048576
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.9, z: -0.06, r: 49.1, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: 0.3, r: 54.4, estimated: false }  # 추론
  coding: { s: 68.4, z: 0.98, r: 64.6, estimated: false }  # 코딩
  agentic: { s: 69.6, z: 0.87, r: 63.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.29, r: 54.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Beam 1.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Beam 1.0

Reflection · Open · Large · 컨텍스트 1M · 종합지능 **17.7307282547205**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $1.2 · 혼합 $0.228/1M · 271.89723637255213 t/s · TTFT 0.7429918095179034s · 1M ctx` · 가성비 77.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.1 | -0.06 | 실측 | [[humanitys-last-exam]] 34.661723818350296%×0.3 |
| 추론 | 54.4 | +0.3 | 실측 | [[critpt]] 13.1428571428571%×1.0, [[humanitys-last-exam]] 34.661723818350296%×1.0 |
| 코딩 | 64.6 | +0.98 | 실측 | [[scicode]] 48.4953703703704%×1.0 |
| 에이전트 | 63.0 | +0.87 | 실측 | [[gdpval]] 1177.08%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 54.4 | +0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
