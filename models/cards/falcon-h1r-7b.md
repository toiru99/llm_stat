---
type: Model
title: Falcon-H1R-7B
creator: TII UAE
license: Open
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 7
is_reasoning: true
radar:
  knowledge: { s: 32.3, z: -0.41, r: 43.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 28.8, z: -0.79, r: 38.2, estimated: false }  # 코딩
  agentic: { s: 15.7, z: -0.83, r: 37.6, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.3, z: -1.11, r: 33.4, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.29, r: 54.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Falcon-H1R-7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Falcon-H1R-7B

TII UAE · Open · Small(7B) · 컨텍스트 256k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.8 | -0.41 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 45.2 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 38.2 | -0.79 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 37.6 | -0.83 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.4 | -1.11 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 54.3 | +0.29 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
