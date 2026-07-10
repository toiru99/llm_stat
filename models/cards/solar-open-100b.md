---
type: Model
title: Solar Open 100B
creator: Upstage
license: Open
intelligence_index: 15.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.1, z: -0.25, r: 46.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 31.0, z: -0.63, r: 40.5, estimated: false }  # 코딩
  agentic: { s: 25.8, z: -0.4, r: 44.0, estimated: false }  # 에이전트
  trust: { s: 12.9, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.4, z: -0.03, r: 49.6, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.52, r: 57.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Open 100B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Solar Open 100B

Upstage · Open · Unknown · 컨텍스트 128k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.2 | -0.25 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 45.2 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 40.5 | -0.63 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 44.0 | -0.4 | 실측 | [[tau2-bench]] 48.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.6 | -0.03 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 57.8 | +0.52 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
