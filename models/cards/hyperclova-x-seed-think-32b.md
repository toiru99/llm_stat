---
type: Model
title: HyperCLOVA X SEED Think (32B)
creator: Naver
license: Open
intelligence_index: 17.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 32
is_reasoning: true
radar:
  knowledge: { s: 29.6, z: -0.55, r: 41.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.2, z: -0.57, r: 41.5, estimated: false }  # 추론
  coding: { s: 37.2, z: -0.41, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 53.0, z: 0.64, r: 59.7, estimated: false }  # 에이전트
  trust: { s: 23.0, z: -0.24, r: 46.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.8, z: -1.0, r: 35.0, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.68, r: 39.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperCLOVA X SEED Think (32B)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# HyperCLOVA X SEED Think (32B)

Naver · Open · Small(32B) · 컨텍스트 128k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.8 | -0.55 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.5 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 43.8 | -0.41 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 59.7 | +0.64 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 46.4 | -0.24 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.0 | -1.0 | 실측 | [[aa-lcr]] 12.0%×1.0 |
| 지시 따르기 | 39.8 | -0.68 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
