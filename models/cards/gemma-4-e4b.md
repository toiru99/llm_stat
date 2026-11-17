---
type: Model
title: Gemma 4 E4B
creator: Google
license: Open
intelligence_index: 4.78077714822335
price_blended_usd_1m: 0.028
output_speed_tps: 61.53133557411135
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.1, z: -0.68, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 20.2, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 23.4, z: -0.56, r: 41.7, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.97, r: 35.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 49.3, z: -1.12, r: 33.2, estimated: false }  # 멀티모달
  long_context: { s: 36.1, z: -0.51, r: 42.3, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.36, r: 44.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemma 4 E4B

Google · Open · Small · 컨텍스트 128k · 종합지능 **4.78077714822335**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $0.028/1M · 61.53133557411135 t/s · TTFT 1.5861614383027247s · 128k ctx` · 가성비 170.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.68 | 실측 | [[gpqa-diamond]] 57.5757575757576%×0.4, [[humanitys-last-exam]] 3.75347544022243%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 57.5757575757576%×1.0, [[humanitys-last-exam]] 3.75347544022243%×1.0 |
| 코딩 | 41.7 | -0.56 | 실측 | [[scicode]] 24.421296296296298%×1.0, [[terminal-bench]] 8.33333333333333%×0.5 |
| 에이전트 | 35.5 | -0.97 | 실측 | [[gdpval]] -29.69%×1.0, [[tau2-bench]] 20.7602339181287%×1.0, [[terminal-bench]] 8.33333333333333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 33.2 | -1.12 | 실측 | [[mmmu-pro]] 51.38728323699419%×1.0 |
| 긴문맥 | 42.3 | -0.51 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 44.6 | -0.36 | 실측 | [[ifbench]] 44.2176870748299%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
