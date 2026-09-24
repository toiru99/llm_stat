---
type: Model
title: Nova 2.0 Omni (Non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.6, z: -0.8, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.84, r: 37.3, estimated: false }  # 코딩
  agentic: { s: 28.0, z: -0.37, r: 44.4, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.76, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 47.9, z: -1.13, r: 33.1, estimated: false }  # 멀티모달
  long_context: { s: 28.1, z: -0.69, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.52, r: 42.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Nova 2.0 Omni (Non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 15.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.8 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 55.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.3 | -0.84 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 44.4 | -0.37 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.5 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 33.1 | -1.13 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 39.7 | -0.69 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 42.2 | -0.52 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
