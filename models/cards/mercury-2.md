---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: 0.1425
output_speed_tps: 873.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.6, z: 0.03, r: 50.5, estimated: false }  # 전문 지식
  reasoning: { s: 36.2, z: 0.06, r: 50.8, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.31, r: 54.7, estimated: false }  # 코딩
  agentic: { s: 35.3, z: -0.09, r: 48.7, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: 0.01, r: 50.2, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · 873.0 t/s · TTFT 5.36s · 128k ctx` · 가성비 105.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.5 | +0.03 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 50.8 | +0.06 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 54.7 | +0.31 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 48.7 | -0.09 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 71.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.2 | +0.01 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
