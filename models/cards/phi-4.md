---
type: Model
title: Phi-4
creator: Microsoft
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.1625
output_speed_tps: 34.0
context_window: 16000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.0, z: -0.74, r: 38.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.74, r: 39.0, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.0, r: 34.9, estimated: false }  # 코딩
  agentic: { s: 3.0, z: -1.34, r: 29.9, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.38, r: 44.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.54, r: 26.8, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.52, r: 27.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Phi-4

Microsoft · Open · Small · 컨텍스트 16k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.13 · 출력 $0.5 · 혼합 $0.1625/1M · 34.0 t/s · TTFT 2.46s · 16k ctx` · 가성비 36.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.9 | -0.74 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.0 | -0.74 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.9 | -1.0 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 29.9 | -1.34 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.8 | -1.54 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.3 | -1.52 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
