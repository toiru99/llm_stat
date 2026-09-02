---
type: Model
title: Tri-21B-Think
creator: Trillion Labs
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 25.9, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 18.8, z: -1.18, r: 32.3, estimated: false }  # 코딩
  agentic: { s: 41.7, z: 0.18, r: 52.6, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.52, r: 42.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.1, z: -0.97, r: 35.4, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tri-21B-Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Tri-21B-Think

Trillion Labs · Open · Small(21B) · 컨텍스트 32k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 32.3 | -1.18 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 52.6 | +0.18 | 실측 | [[tau2-bench]] 81.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 42.2 | -0.52 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.4 | -0.97 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
