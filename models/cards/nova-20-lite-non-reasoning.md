---
type: Model
title: Nova 2.0 Lite (non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: 118.017842950409
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.4, z: -0.62, r: 40.7, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.76, r: 38.7, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.01, r: 34.9, estimated: false }  # 코딩
  agentic: { s: 36.4, z: -0.29, r: 45.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 46.0, z: -1.3, r: 30.6, estimated: false }  # 멀티모달
  long_context: { s: 21.1, z: -0.97, r: 35.5, estimated: false }  # 긴문맥
  instruction: { s: 39.9, z: -0.58, r: 41.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Nova 2.0 Lite (non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 118.017842950409 t/s · TTFT 1.78311410174275s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.7 | -0.62 | 실측 | [[gpqa-diamond]] 60.303030303030305%×0.4, [[humanitys-last-exam]] 2.87303058387396%×0.3 |
| 추론 | 38.7 | -0.76 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.303030303030305%×1.0, [[humanitys-last-exam]] 2.87303058387396%×1.0 |
| 코딩 | 34.9 | -1.01 | 실측 | [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 45.6 | -0.29 | 실측 | [[tau2-bench]] 61.9883040935672%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 30.6 | -1.3 | 실측 | [[mmmu-pro]] 49.0173410404624%×1.0 |
| 긴문맥 | 35.5 | -0.97 | 실측 | [[aa-lcr]] 18.6666666666667%×1.0 |
| 지시 따르기 | 41.2 | -0.58 | 실측 | [[ifbench]] 40.5442176870748%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
