---
type: Model
title: Command A+
creator: Cohere
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0
output_speed_tps: 196.0
context_window: 192000
status: current
size_class: Large
params_b: 218
is_reasoning: true
radar:
  knowledge: { s: 29.2, z: -0.57, r: 41.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.7, z: -0.13, r: 48.0, estimated: false }  # 추론
  coding: { s: 54.8, z: 0.27, r: 54.1, estimated: false }  # 코딩
  agentic: { s: 37.0, z: 0.01, r: 50.2, estimated: false }  # 에이전트
  trust: { s: 97.7, z: 3.12, r: 96.8, estimated: false }  # 신뢰성
  multimodal: { s: 68.6, z: -0.18, r: 47.3, estimated: false }  # 멀티모달
  long_context: { s: 59.0, z: 0.26, r: 53.9, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.35, r: 70.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command A+
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# Command A+

Cohere · Open · Large(218B) · 컨텍스트 192k · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 196.0 t/s · TTFT 0.4s · 192k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.5 | -0.57 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.0 | -0.13 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 54.1 | +0.27 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 50.2 | +0.01 | 실측 | [[gdpval]] 11.0%×1.0, [[tau2-bench]] 81.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 96.8 | +3.12 | 실측 | [[aa-omniscience]] 86.0%×1.0 |
| 멀티모달 | 47.3 | -0.18 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 53.9 | +0.26 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
