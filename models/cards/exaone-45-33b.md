---
type: Model
title: EXAONE 4.5 33B
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 32.5, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 31.0, z: -0.3, r: 45.6, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 70.7, z: -0.03, r: 49.6, estimated: false }  # 멀티모달
  long_context: { s: 61.7, z: 0.25, r: 53.7, estimated: false }  # 긴문맥
  instruction: { s: 64.4, z: 0.45, r: 56.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.5 33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# EXAONE 4.5 33B

LG AI Research · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[gpqa-diamond]] 79.39393939393939%×0.4, [[humanitys-last-exam]] 12.8822984244671%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 79.39393939393939%×1.0, [[humanitys-last-exam]] 12.8822984244671%×1.0 |
| 코딩 | 45.6 | -0.3 | 실측 | [[terminal-bench]] 20.4545454545455%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[gdpval]] 474.45%×1.0, [[tau2-bench]] 78.07017543859651%×1.0, [[terminal-bench]] 20.4545454545455%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.6 | -0.03 | 실측 | [[mmmu-pro]] 67.3410404624277%×1.0 |
| 긴문맥 | 53.7 | +0.25 | 실측 | [[aa-lcr]] 54.6666666666667%×1.0 |
| 지시 따르기 | 56.7 | +0.45 | 실측 | [[ifbench]] 57.959183673469404%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
