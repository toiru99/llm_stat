---
type: Model
title: HyperCLOVA X SEED Think (32B)
creator: Naver
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 32
is_reasoning: true
radar:
  knowledge: { s: 28.6, z: -0.59, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 22.5, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 18.2, z: -0.49, r: 42.7, estimated: false }  # 코딩
  agentic: { s: 53.0, z: 0.6, r: 58.9, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.33, r: 45.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.7, z: -1.03, r: 34.6, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.67, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperCLOVA X SEED Think (32B)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# HyperCLOVA X SEED Think (32B)

Naver · Open · Small(32B) · 컨텍스트 128k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.59 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.7 | -0.49 | 실측 | [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 58.9 | +0.6 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 45.1 | -0.33 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.6 | -1.03 | 실측 | [[aa-lcr]] 14.0%×1.0 |
| 지시 따르기 | 39.9 | -0.67 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
