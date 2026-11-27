---
type: Model
title: GLM-5.2 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.8845
output_speed_tps: 132.16336427108405
context_window: 1000000
status: past
size_class: Large
params_b: 753
is_reasoning: false
radar:
  knowledge: { s: 44.0, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.6, z: -0.28, r: 45.8, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 52.5, z: 0.19, r: 52.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.7, z: -0.3, r: 45.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GLM-5.2 (non-reasoning)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.8845/1M · 132.16336427108405 t/s · TTFT 1.68084198538818s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 68.5859%×0.4, [[humanitys-last-exam]] 9.77757%×0.3 |
| 추론 | 45.8 | -0.28 | 실측 | [[critpt]] 3.14286%×1.0, [[gpqa-diamond]] 68.5859%×1.0, [[humanitys-last-exam]] 9.77757%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 52.8 | +0.19 | 실측 | [[gdpval]] 1248.51 Elo×1.0, [[tau3-banking]] 16.701%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.4 | -0.3 | 실측 | [[aa-lcr]] 42.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
