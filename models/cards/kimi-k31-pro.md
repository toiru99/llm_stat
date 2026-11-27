---
type: Model
title: Kimi K3.1 Pro
creator: Kimi
license: Open
intelligence_index: 46.553633775429
price_blended_usd_1m: 1.54
output_speed_tps: 37.0310851195824
context_window: 1000000
status: current
size_class: Large
params_b: 2800
is_reasoning: true
radar:
  knowledge: { s: 70.2, z: 1.14, r: 67.1, estimated: false }  # 전문 지식
  reasoning: { s: 69.5, z: 1.71, r: 75.6, estimated: false }  # 추론
  coding: { s: 88.6, z: 1.6, r: 74.0, estimated: false }  # 코딩
  agentic: { s: 99.5, z: 1.84, r: 77.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.5, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3.1 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Kimi K3.1 Pro

Kimi · Open · Large(2800B) · 컨텍스트 1M · 종합지능 **46.553633775429**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 37.0310851195824 t/s · TTFT 3.21687060559339s · 1M ctx` · 가성비 30.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 67.1 | +1.14 | 실측 | [[humanitys-last-exam]] 52.456%×0.3 |
| 추론 | 75.6 | +1.71 | 실측 | [[critpt]] 24.5714%×1.0, [[humanitys-last-exam]] 52.456%×1.0 |
| 코딩 | 74.0 | +1.6 | 실측 | [[scicode]] 60.7639%×1.0 |
| 에이전트 | 77.7 | +1.84 | 실측 | [[gdpval]] 1855.77 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 83.8728%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 86.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
