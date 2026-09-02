---
type: Model
title: Nova Premier
creator: Amazon
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 2.1875
output_speed_tps: 33.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.4, r: 44.1, estimated: false }  # 전문 지식
  reasoning: { s: 20.2, z: -0.72, r: 39.3, estimated: false }  # 추론
  coding: { s: 33.6, z: -0.55, r: 41.7, estimated: false }  # 코딩
  agentic: { s: 24.5, z: -0.49, r: 42.6, estimated: false }  # 에이전트
  trust: { s: 26.8, z: 0.12, r: 51.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.3, z: -0.38, r: 44.3, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.79, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Premier
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Nova Premier

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.5 · 출력 $12.5 · 혼합 $2.1875/1M · 33.0 t/s · TTFT 2.82s · 1M ctx` · 가성비 5.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.1 | -0.4 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.3 | -0.72 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 41.7 | -0.55 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 42.6 | -0.49 | 실측 | [[tau2-bench]] 38.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 28.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.3 | -0.38 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 38.1 | -0.79 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
