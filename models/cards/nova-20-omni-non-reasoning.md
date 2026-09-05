---
type: Model
title: Nova 2.0 Omni (Non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.6, z: -0.78, r: 38.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.76, r: 38.5, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.75, r: 38.7, estimated: false }  # 코딩
  agentic: { s: 28.0, z: -0.36, r: 44.6, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.72, r: 39.3, estimated: false }  # 신뢰성
  multimodal: { s: 48.6, z: -1.07, r: 34.0, estimated: false }  # 멀티모달
  long_context: { s: 28.1, z: -0.65, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.49, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Nova 2.0 Omni (Non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 9.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.2 | -0.78 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 55.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.5 | -0.76 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.7 | -0.75 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 44.6 | -0.36 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 39.3 | -0.72 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 34.0 | -1.07 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 40.3 | -0.65 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 42.6 | -0.49 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
