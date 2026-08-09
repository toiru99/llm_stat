---
type: Model
title: Nova 2.0 Lite (high)
creator: Amazon
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.52
output_speed_tps: 164.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.0, z: -0.03, r: 49.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.0, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 49.7, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 29.8, z: -0.24, r: 46.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.5, estimated: false }  # 신뢰성
  multimodal: { s: 70.0, z: -0.09, r: 48.7, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.21, r: 68.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Nova 2.0 Lite (high)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 164.0 t/s · TTFT 14.35s · 1M ctx` · 가성비 34.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.5 | -0.03 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 46.5 | -0.24 | 실측 | [[gdpval]] 4.0%×1.0, [[tau2-bench]] 73.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 48.7 | -0.09 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
