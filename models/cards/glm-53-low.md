---
type: Model
title: GLM-5.3 (low)
creator: Z AI
license: Open
intelligence_index: 23.1079373025379
price_blended_usd_1m: 0.902
output_speed_tps: 68.0551519153137
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: true
radar:
  knowledge: { s: 48.5, z: 0.08, r: 51.2, estimated: false }  # 전문 지식
  reasoning: { s: 44.6, z: 0.47, r: 57.1, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.56, r: 58.4, estimated: false }  # 코딩
  agentic: { s: 76.5, z: 1.04, r: 65.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GLM-5.3 (low)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **23.1079373025379**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 68.0551519153137 t/s · TTFT 1.83760262961451s · 1M ctx` · 가성비 25.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.2 | +0.08 | 실측 | [[humanitys-last-exam]] 36.5616%×0.3 |
| 추론 | 57.1 | +0.47 | 실측 | [[critpt]] 14.5714%×1.0, [[humanitys-last-exam]] 36.5616%×1.0 |
| 코딩 | 58.4 | +0.56 | 실측 | [[scicode]] 42.0139%×1.0 |
| 에이전트 | 65.5 | +1.04 | 실측 | [[gdpval]] 1332.52 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 72.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
