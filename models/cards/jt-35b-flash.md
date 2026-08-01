---
type: Model
title: JT-35B-Flash
creator: China Mobile
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 35
is_reasoning: false
radar:
  knowledge: { s: 45.7, z: 0.21, r: 53.1, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 46.9, z: -0.01, r: 49.9, estimated: false }  # 코딩
  agentic: { s: 72.0, z: 1.38, r: 70.7, estimated: false }  # 에이전트
  trust: { s: 41.4, z: 0.63, r: 59.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.68, r: 60.2, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — JT-35B-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# JT-35B-Flash

China Mobile · Proprietary · Small(35B) · 컨텍스트 256k · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.1 | +0.21 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 49.9 | -0.01 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 70.7 | +1.38 | 실측 | [[tau2-bench]] 99.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 59.5 | +0.63 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.2 | +0.68 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
