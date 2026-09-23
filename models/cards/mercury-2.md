---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.1425
output_speed_tps: 750.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.5, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 48.1, z: 0.45, r: 56.7, estimated: false }  # 코딩
  agentic: { s: 32.6, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: -0.04, r: 49.5, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.16, r: 67.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · 750.0 t/s · TTFT 4.72s · 128k ctx` · 가성비 98.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 56.7 | +0.45 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 71.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.5 | -0.04 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
