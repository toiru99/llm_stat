---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: None
output_speed_tps: 945.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.5, z: 0.06, r: 50.9, estimated: false }  # 전문 지식
  reasoning: { s: 37.2, z: 0.14, r: 52.1, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.42, r: 56.2, estimated: false }  # 코딩
  agentic: { s: 39.2, z: 0.11, r: 51.6, estimated: false }  # 에이전트
  trust: { s: 8.0, z: -0.95, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.4, z: -0.06, r: 49.1, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.18, r: 67.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $None/1M · 945.0 t/s · TTFT 3.37s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.9 | +0.06 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 52.1 | +0.14 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 56.2 | +0.42 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 51.6 | +0.11 | 실측 | [[gdpval]] 10.0%×1.0, [[tau2-bench]] 71.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 35.7 | -0.95 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.1 | -0.06 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
