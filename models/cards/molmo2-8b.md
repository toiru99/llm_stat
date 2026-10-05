---
type: Model
title: Molmo2-8B
creator: Allen Institute for AI
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 36900
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.6, z: -1.06, r: 34.1, estimated: false }  # 전문 지식
  reasoning: { s: 14.5, z: -1.0, r: 35.0, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.25, r: 31.3, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.48, r: 27.8, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: 30.1, z: -2.06, r: 19.1, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.38, r: 29.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Molmo2-8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Molmo2-8B

Allen Institute for AI · Open · Small · 컨텍스트 36k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 36k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.1 | -1.06 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.0 | -1.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 31.3 | -1.25 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 27.8 | -1.48 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 19.1 | -2.06 | 실측 | [[mmmu-pro]] 37.0%×1.0 |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 29.3 | -1.38 | 실측 | [[ifbench]] 27.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
