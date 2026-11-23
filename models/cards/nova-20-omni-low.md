---
type: Model
title: Nova 2.0 Omni (low)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.5, z: 1.07, r: 66.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.16, r: 32.5, estimated: false }  # 코딩
  agentic: { s: 37.1, z: -0.27, r: 45.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.4, z: -0.56, r: 41.6, estimated: false }  # 멀티모달
  long_context: { s: 65.0, z: 0.34, r: 55.1, estimated: false }  # 긴문맥
  instruction: { s: 69.7, z: 0.66, r: 59.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Nova 2.0 Omni (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.0 | +1.07 | 실측 | [[gpqa-diamond]] 69.89898989898991%×0.4 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.89898989898991%×1.0 |
| 코딩 | 32.5 | -1.16 | 실측 | [[terminal-bench]] 3.78787878787879%×0.5 |
| 에이전트 | 45.9 | -0.27 | 실측 | [[tau2-bench]] 67.83625730994149%×1.0, [[terminal-bench]] 3.78787878787879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 41.6 | -0.56 | 실측 | [[mmmu-pro]] 59.8265895953757%×1.0 |
| 긴문맥 | 55.1 | +0.34 | 실측 | [[aa-lcr]] 57.6666666666667%×1.0 |
| 지시 따르기 | 59.9 | +0.66 | 실측 | [[ifbench]] 61.7687074829932%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
