---
type: Model
title: Nova Premier
creator: Amazon
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 2.18
output_speed_tps: 34.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.2, z: -0.4, r: 44.0, estimated: false }  # 전문 지식
  reasoning: { s: 21.2, z: -0.65, r: 40.3, estimated: false }  # 추론
  coding: { s: 34.6, z: -0.48, r: 42.7, estimated: false }  # 코딩
  agentic: { s: 24.5, z: -0.45, r: 43.2, estimated: false }  # 에이전트
  trust: { s: 36.5, z: 0.41, r: 56.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.5, z: -0.26, r: 46.1, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.76, r: 38.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova Premier
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# Nova Premier

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.5 · 출력 $12.5 · 혼합 $2.18/1M · 34.0 t/s · TTFT 2.99s · 1M ctx` · 가성비 6.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.0 | -0.4 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.3 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.7 | -0.48 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 43.2 | -0.45 | 실측 | [[tau2-bench]] 38.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 56.2 | +0.41 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.1 | -0.26 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 38.7 | -0.76 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
