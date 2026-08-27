---
type: Model
title: JT-MINI
creator: China Mobile
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.6, z: -0.56, r: 41.6, estimated: false }  # 전문 지식
  reasoning: { s: 25.8, z: -0.48, r: 42.7, estimated: false }  # 추론
  coding: { s: 39.1, z: -0.4, r: 44.1, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.7, z: -1.06, r: 34.2, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.78, r: 38.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-MINI
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# JT-MINI

China Mobile · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.6 | -0.56 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.7 | -0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 44.1 | -0.4 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.2 | -1.06 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 38.3 | -0.78 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
