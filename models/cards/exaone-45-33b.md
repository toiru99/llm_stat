---
type: Model
title: EXAONE 4.5 33B
creator: LG AI Research
license: Open
intelligence_index: 21.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Small
params_b: 34.4
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.5, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 41.2, z: -0.29, r: 45.7, estimated: false }  # 코딩
  agentic: { s: 40.8, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 20.9, z: -0.27, r: 45.9, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.1, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 62.7, z: 0.37, r: 55.6, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.43, r: 56.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.5 33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# EXAONE 4.5 33B

LG AI Research · Open · Small(34.4B) · 컨텍스트 262k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 45.7 | -0.29 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 20.0%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[gdpval]] 9.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[terminal-bench]] 20.0%×1.0 |
| 신뢰성 | 45.9 | -0.27 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 51.4 | +0.1 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 55.6 | +0.37 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 56.4 | +0.43 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
