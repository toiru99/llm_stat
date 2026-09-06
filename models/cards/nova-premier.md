---
type: Model
title: Nova Premier
creator: Amazon
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 2.1875
output_speed_tps: 33.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.2, z: -0.42, r: 43.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.73, r: 39.1, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.75, r: 38.7, estimated: false }  # 코딩
  agentic: { s: 24.5, z: -0.5, r: 42.5, estimated: false }  # 에이전트
  trust: { s: 26.8, z: 0.11, r: 51.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.2, z: -0.33, r: 45.0, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.79, r: 38.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Premier
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Nova Premier

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $2.5 · 출력 $12.5 · 혼합 $2.1875/1M · 33.0 t/s · TTFT 2.94s · 1M ctx` · 가성비 3.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.7 | -0.42 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.1 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.7 | -0.75 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 42.5 | -0.5 | 실측 | [[tau2-bench]] 38.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 51.6 | +0.11 | 실측 | [[aa-omniscience]] 28.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.0 | -0.33 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 38.2 | -0.79 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
