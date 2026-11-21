---
type: Model
title: HyperCLOVA X SEED Think (32B)
creator: Naver
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.51, r: 42.3, estimated: false }  # 전문 지식
  reasoning: { s: 21.9, z: -0.67, r: 39.9, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.74, r: 39.0, estimated: false }  # 코딩
  agentic: { s: 53.3, z: 0.29, r: 54.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.4, z: -1.14, r: 33.0, estimated: false }  # 긴문맥
  instruction: { s: 36.2, z: -0.74, r: 38.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperCLOVA X SEED Think (32B)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# HyperCLOVA X SEED Think (32B)

Naver · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.3 | -0.51 | 실측 | [[gpqa-diamond]] 61.5151515151515%×0.4, [[humanitys-last-exam]] 5.4680259499536605%×0.3 |
| 추론 | 39.9 | -0.67 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.5151515151515%×1.0, [[humanitys-last-exam]] 5.4680259499536605%×1.0 |
| 코딩 | 39.0 | -0.74 | 실측 | [[terminal-bench]] 12.1212121212121%×0.5 |
| 에이전트 | 54.4 | +0.29 | 실측 | [[tau2-bench]] 87.42690058479529%×1.0, [[terminal-bench]] 12.1212121212121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.0 | -1.14 | 실측 | [[aa-lcr]] 13.6666666666667%×1.0 |
| 지시 따르기 | 38.9 | -0.74 | 실측 | [[ifbench]] 37.891156462585%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
