---
type: Model
title: Command A+
creator: Cohere
license: Open
intelligence_index: 6.24120025576958
price_blended_usd_1m: 0
output_speed_tps: 206.0268121866
context_window: 192000
status: current
size_class: Large
params_b: 218
is_reasoning: true
radar:
  knowledge: { s: 50.2, z: 0.16, r: 52.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 47.3, z: 0.21, r: 53.2, estimated: false }  # 코딩
  agentic: { s: 42.8, z: -0.15, r: 47.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.0, z: -0.33, r: 45.1, estimated: false }  # 멀티모달
  long_context: { s: 59.4, z: 0.05, r: 50.8, estimated: false }  # 긴문맥
  instruction: { s: 86.8, z: 1.51, r: 72.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command A+
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Command A+

Cohere · Open · Large(218B) · 컨텍스트 192k · 종합지능 **6.24120025576958**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 206.0268121866 t/s · TTFT 0.905544284871542s · 192k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.5 | +0.16 | 실측 | [[gpqa-diamond]] 76.0606%×0.4, [[humanitys-last-exam]] 11.9555%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 76.0606%×1.0, [[humanitys-last-exam]] 11.9555%×1.0 |
| 코딩 | 53.2 | +0.21 | 실측 | [[scicode]] 38.5417%×1.0, [[terminal-bench]] 25%×0.5 |
| 에이전트 | 47.7 | -0.15 | 실측 | [[gdpval]] 521.55 Elo×1.0, [[tau2-bench]] 80.7018%×1.0, [[tau3-banking]] 5.97938%×1.0, [[terminal-bench]] 25%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.1 | -0.33 | 실측 | [[mmmu-pro]] 63.237%×1.0 |
| 긴문맥 | 50.8 | +0.05 | 실측 | [[aa-lcr]] 52.6667%×1.0 |
| 지시 따르기 | 72.7 | +1.51 | 실측 | [[ifbench]] 73.9456%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
