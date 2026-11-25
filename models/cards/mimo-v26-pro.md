---
type: Model
title: MiMo-V2.6-Pro
creator: Xiaomi
license: Open
intelligence_index: 29.9402883598371
price_blended_usd_1m: 0.1765
output_speed_tps: 41.3510139970185
context_window: 1000000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 65.9, z: 0.93, r: 64.0, estimated: false }  # 전문 지식
  reasoning: { s: 70.2, z: 1.74, r: 76.1, estimated: false }  # 추론
  coding: { s: 88.8, z: 1.61, r: 74.1, estimated: false }  # 코딩
  agentic: { s: 92.3, z: 1.59, r: 73.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# MiMo-V2.6-Pro

Xiaomi · Open · Large(1000B) · 컨텍스트 1M · 종합지능 **29.9402883598371**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.435 · 출력 $0.87 · 혼합 $0.1765/1M · 41.3510139970185 t/s · TTFT 4.28377258492205s · 1M ctx` · 가성비 169.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.0 | +0.93 | 실측 | [[humanitys-last-exam]] 49.3513%×0.3 |
| 추론 | 76.1 | +1.74 | 실측 | [[critpt]] 26.5714%×1.0, [[humanitys-last-exam]] 49.3513%×1.0 |
| 코딩 | 74.1 | +1.61 | 실측 | [[scicode]] 60.8796%×1.0 |
| 에이전트 | 73.9 | +1.59 | 실측 | [[gdpval]] 1691.43 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 86.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
