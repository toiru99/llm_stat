---
type: Model
title: Doubao Seed Code
creator: ByteDance Seed
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.6, z: 0.21, r: 53.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.9, z: -0.18, r: 47.2, estimated: false }  # 추론
  coding: { s: 40.2, z: 0.01, r: 50.1, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.16, r: 52.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 71.5, z: 0.0, r: 50.1, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 55.2, z: 0.05, r: 50.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Doubao Seed Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Doubao Seed Code

ByteDance Seed · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.1 | +0.21 | 실측 | [[gpqa-diamond]] 76.3636363636364%×0.4, [[humanitys-last-exam]] 14.0871177015755%×0.3 |
| 추론 | 47.2 | -0.18 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 76.3636363636364%×1.0, [[humanitys-last-exam]] 14.0871177015755%×1.0 |
| 코딩 | 50.1 | +0.01 | 실측 | [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 52.4 | +0.16 | 실측 | [[tau2-bench]] 58.187134502923996%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.1 | +0.0 | 실측 | [[mmmu-pro]] 68.092485549133%×1.0 |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 71.6666666666667%×1.0 |
| 지시 따르기 | 50.8 | +0.05 | 실측 | [[ifbench]] 51.4285714285714%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
