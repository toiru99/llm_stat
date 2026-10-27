---
type: Model
title: Kimi K3.1 Pro
creator: Kimi
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 1.54
output_speed_tps: 44.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.2, z: 1.62, r: 74.3, estimated: false }  # 전문 지식
  reasoning: { s: 80.4, z: 1.95, r: 79.3, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.76, r: 76.4, estimated: false }  # 코딩
  agentic: { s: 98.9, z: 2.22, r: 83.2, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.29, r: 69.3, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.12, r: 66.8, estimated: false }  # 멀티모달
  long_context: { s: 96.6, z: 1.31, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 73.7, z: 0.82, r: 62.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3.1 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Kimi K3.1 Pro

Kimi · Proprietary · Large · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 44.0 t/s · TTFT 2.98s · 1M ctx` · 가성비 35.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.3 | +1.62 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[humanitys-last-exam]] 52.0%×0.3 |
| 추론 | 79.3 | +1.95 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 52.0%×1.0 |
| 코딩 | 76.4 | +1.76 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 83.2 | +2.22 | 실측 | [[gdpval]] 1846.0%×1.0 |
| 신뢰성 | 69.3 | +1.29 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 66.8 | +1.12 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 69.7 | +1.31 | 실측 | [[aa-lcr]] 86.0%×1.0 |
| 지시 따르기 | 62.3 | +0.82 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
