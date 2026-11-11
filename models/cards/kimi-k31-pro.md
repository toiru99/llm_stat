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
  knowledge: { s: 70.2, z: 1.12, r: 66.9, estimated: false }  # 전문 지식
  reasoning: { s: 67.5, z: 1.19, r: 67.9, estimated: false }  # 추론
  coding: { s: 88.7, z: 1.71, r: 75.6, estimated: false }  # 코딩
  agentic: { s: 99.7, z: 2.2, r: 83.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 97.3, z: 1.33, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 82.8, z: 1.29, r: 69.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3.1 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Kimi K3.1 Pro

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 29.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.9 | +1.12 | 실측 | [[humanitys-last-exam]] 52.5%×0.3 |
| 추론 | 67.9 | +1.19 | 실측 | [[critpt]] 49.5%×1.0, [[humanitys-last-exam]] 52.5%×1.0 |
| 코딩 | 75.6 | +1.71 | 실측 | [[scicode]] 60.8%×1.0 |
| 에이전트 | 83.0 | +2.2 | 실측 | [[gdpval]] 1861.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 69.9 | +1.33 | 실측 | [[aa-lcr]] 86.3%×1.0 |
| 지시 따르기 | 69.4 | +1.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
