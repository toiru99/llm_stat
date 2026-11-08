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
  knowledge: { s: 69.5, z: 0.89, r: 63.4, estimated: false }  # 전문 지식
  reasoning: { s: 69.5, z: 1.08, r: 66.2, estimated: false }  # 추론
  coding: { s: 5.8, z: -1.06, r: 34.2, estimated: false }  # 코딩
  agentic: { s: 5.8, z: -0.98, r: 35.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.8, z: -0.53, r: 42.0, estimated: false }  # 멀티모달
  long_context: { s: 65.1, z: 0.37, r: 55.6, estimated: false }  # 긴문맥
  instruction: { s: 69.8, z: 0.71, r: 60.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Nova 2.0 Omni (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.4 | +0.89 | 실측 | [[gpqa-diamond]] 69.9%×0.4 |
| 추론 | 66.2 | +1.08 | 실측 | [[gpqa-diamond]] 69.9%×1.0 |
| 코딩 | 34.2 | -1.06 | 실측 | [[terminal-bench]] 3.8%×0.5 |
| 에이전트 | 35.3 | -0.98 | 실측 | [[terminal-bench]] 3.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.0 | -0.53 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 55.6 | +0.37 | 실측 | [[aa-lcr]] 57.7%×1.0 |
| 지시 따르기 | 60.7 | +0.71 | 실측 | [[ifbench]] 61.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
