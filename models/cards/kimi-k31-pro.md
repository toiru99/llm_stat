---
type: Model
title: Kimi K3.1 Pro
creator: Kimi
license: Open
intelligence_index: 46.4526236744189
price_blended_usd_1m: 1.54
output_speed_tps: 31.34414956151393
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.2, z: 1.1, r: 66.5, estimated: false }  # 전문 지식
  reasoning: { s: 69.5, z: 1.67, r: 75.1, estimated: false }  # 추론
  coding: { s: 88.6, z: 1.65, r: 74.7, estimated: false }  # 코딩
  agentic: { s: 99.7, z: 1.9, r: 78.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.5, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.3, r: 69.5, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 0.92, r: 63.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3.1 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Kimi K3.1 Pro

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **46.4526236744189**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 31.34414956151393 t/s · TTFT 3.3678902831850857s · 1M ctx` · 가성비 30.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.5 | +1.1 | 실측 | [[humanitys-last-exam]] 52.4559777571826%×0.3 |
| 추론 | 75.1 | +1.67 | 실측 | [[critpt]] 24.571428571428598%×1.0, [[humanitys-last-exam]] 52.4559777571826%×1.0 |
| 코딩 | 74.7 | +1.65 | 실측 | [[scicode]] 60.76388888888889%×1.0 |
| 에이전트 | 78.5 | +1.9 | 실측 | [[gdpval]] 1860.57%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 83.8728323699422%×1.0 |
| 긴문맥 | 69.5 | +1.3 | 실측 | [[aa-lcr]] 86.3333333333333%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
