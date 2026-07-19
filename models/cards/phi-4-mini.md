---
type: Model
title: Phi-4 Mini
creator: Microsoft
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.0
output_speed_tps: 45.0
context_window: 128000
status: current
size_class: Tiny
params_b: 3.84
is_reasoning: false
radar:
  knowledge: { s: 14.3, z: -1.27, r: 31.0, estimated: false }  # 전문 지식
  reasoning: { s: 11.1, z: -1.19, r: 32.2, estimated: false }  # 추론
  coding: { s: 12.2, z: -1.44, r: 28.5, estimated: false }  # 코딩
  agentic: { s: 2.8, z: -1.3, r: 30.5, estimated: false }  # 에이전트
  trust: { s: 27.1, z: -0.03, r: 49.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.4, z: -0.9, r: 36.5, estimated: false }  # 긴문맥
  instruction: { s: 12.7, z: -1.65, r: 25.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Phi-4 Mini

Microsoft · Open · Tiny(3.84B) · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · 45.0 t/s · TTFT 0.84s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.0 | -1.27 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 32.2 | -1.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 28.5 | -1.44 | 실측 | [[scicode]] 11.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 30.5 | -1.3 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 8.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 49.5 | -0.03 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.5 | -0.9 | 실측 | [[aa-lcr]] 14.0%×1.0 |
| 지시 따르기 | 25.3 | -1.65 | 실측 | [[ifbench]] 21.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
