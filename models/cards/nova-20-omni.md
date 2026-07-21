---
type: Model
title: Nova 2.0 Omni
creator: Amazon
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.4, z: -0.73, r: 39.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.8, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 34.6, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 28.0, z: -0.32, r: 45.2, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.75, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: 50.7, z: -1.0, r: 35.0, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.59, r: 41.2, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.49, r: 42.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Nova 2.0 Omni

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.0 | -0.73 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 55.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 45.2 | -0.32 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.7 | -0.75 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 35.0 | -1.0 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 41.2 | -0.59 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 42.7 | -0.49 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
