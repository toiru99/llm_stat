---
type: Model
title: Motif-2-12.7B
creator: Motif Technologies
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 12.7
is_reasoning: true
radar:
  knowledge: { s: 31.8, z: -0.45, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.36, r: 44.7, estimated: false }  # 추론
  coding: { s: 33.1, z: -0.62, r: 40.7, estimated: false }  # 코딩
  agentic: { s: 26.3, z: -0.41, r: 43.9, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.7, z: -1.05, r: 34.3, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.37, r: 55.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif-2-12.7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Motif-2-12.7B

Motif Technologies · Proprietary · Small(12.7B) · 컨텍스트 128k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.45 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 44.7 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 40.7 | -0.62 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 43.9 | -0.41 | 실측 | [[tau2-bench]] 46.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.3 | -1.05 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 55.6 | +0.37 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
