---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 0.1425
output_speed_tps: 1.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.2, z: 0.04, r: 50.5, estimated: false }  # 전문 지식
  reasoning: { s: 37.2, z: 0.07, r: 51.0, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.33, r: 55.0, estimated: false }  # 코딩
  agentic: { s: 36.3, z: -0.04, r: 49.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: -0.04, r: 49.3, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.11, r: 66.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · 1.0 t/s · TTFT 3.63s · 128k ctx` · 가성비 154.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.5 | +0.04 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 51.0 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 55.0 | +0.33 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 49.5 | -0.04 | 실측 | [[gdpval]] 10.0%×1.0, [[tau2-bench]] 71.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.3 | -0.04 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
