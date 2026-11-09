---
type: Model
title: Kimi K3.1 Pro
creator: Kimi
license: Open
intelligence_index: 46.0
price_blended_usd_1m: 1.54
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.2, z: 1.59, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 77.0, z: 1.42, r: 71.3, estimated: false }  # 추론
  coding: { s: 89.8, z: 1.75, r: 76.2, estimated: false }  # 코딩
  agentic: { s: 99.6, z: 2.23, r: 83.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 97.3, z: 1.34, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 82.2, z: 1.25, r: 68.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3.1 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Kimi K3.1 Pro

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 29.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.59 | 실측 | [[humanitys-last-exam]] 52.5%×0.3 |
| 추론 | 71.3 | +1.42 | 실측 | [[critpt]] 49.5%×1.0, [[humanitys-last-exam]] 52.5%×1.0 |
| 코딩 | 76.2 | +1.75 | 실측 | [[scicode]] 60.8%×1.0 |
| 에이전트 | 83.4 | +2.23 | 실측 | [[gdpval]] 1858.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 70.0 | +1.34 | 실측 | [[aa-lcr]] 86.3%×1.0 |
| 지시 따르기 | 68.7 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
