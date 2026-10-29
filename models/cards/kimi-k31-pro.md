---
type: Model
title: Kimi K3.1 Pro
creator: Kimi
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 1.54
output_speed_tps: 36.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.0, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 73.8, z: 1.26, r: 68.9, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.77, r: 76.5, estimated: false }  # 코딩
  agentic: { s: 98.9, z: 2.22, r: 83.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.12, r: 66.7, estimated: false }  # 멀티모달
  long_context: { s: 96.6, z: 1.33, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.27, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3.1 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Kimi K3.1 Pro

Kimi · Proprietary · Large · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 36.0 t/s · TTFT 2.95s · 1M ctx` · 가성비 29.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[humanitys-last-exam]] 52.0%×0.3 |
| 추론 | 68.9 | +1.26 | 실측 | [[critpt]] 45.0%×1.0, [[humanitys-last-exam]] 52.0%×1.0 |
| 코딩 | 76.5 | +1.77 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 83.3 | +2.22 | 실측 | [[gdpval]] 1846.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.7 | +1.12 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 69.9 | +1.33 | 실측 | [[aa-lcr]] 86.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
