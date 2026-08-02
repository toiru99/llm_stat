---
type: Model
title: Muse Spark
creator: Meta
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.2, z: 1.74, r: 76.1, estimated: false }  # 전문 지식
  reasoning: { s: 67.4, z: 1.65, r: 74.8, estimated: false }  # 추론
  coding: { s: 80.5, z: 1.39, r: 70.9, estimated: false }  # 코딩
  agentic: { s: 66.7, z: 1.18, r: 67.7, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.09, r: 51.3, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.09, r: 66.4, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.53, r: 72.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Muse Spark

Meta · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.1 | +1.74 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 74.8 | +1.65 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 70.9 | +1.39 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 67.7 | +1.18 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 20.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 51.3 | +0.09 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 66.4 | +1.09 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 72.9 | +1.53 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
