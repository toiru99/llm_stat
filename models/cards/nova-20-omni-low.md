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
  knowledge: { s: 69.5, z: 1.11, r: 66.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 37.1, z: -0.35, r: 44.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.4, z: -0.56, r: 41.6, estimated: false }  # 멀티모달
  long_context: { s: 65.0, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 69.7, z: 0.8, r: 62.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nova 2.0 Omni (low)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.6 | +1.11 | 실측 | [[gpqa-diamond]] 69.899%×0.4 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.899%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 44.7 | -0.35 | 실측 | [[tau2-bench]] 67.8363%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 41.6 | -0.56 | 실측 | [[mmmu-pro]] 59.8266%×1.0 |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 57.6667%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 실측 | [[ifbench]] 61.7687%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
