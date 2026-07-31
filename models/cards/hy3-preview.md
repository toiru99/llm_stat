---
type: Model
title: Hy3-preview
creator: Tencent
license: Open
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 147.0
context_window: 256000
status: current
size_class: Large
params_b: 295
is_reasoning: false
radar:
  knowledge: { s: 56.5, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 62.7, z: 0.66, r: 59.8, estimated: false }  # 코딩
  agentic: { s: 72.7, z: 1.42, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.68, r: 60.2, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.77, r: 61.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Hy3-preview

Tencent · Open · Large(295B) · 컨텍스트 256k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.06 · 출력 $0.23 · 혼합 $None/1M · 147.0 t/s · TTFT 3.22s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 59.8 | +0.66 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 71.2 | +1.42 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 39.8 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.2 | +0.68 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 61.6 | +0.77 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
