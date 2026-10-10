---
type: Model
title: Exaone 4.0 1.2B (non-reasoning)
creator: LG AI Research
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: current
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.6, z: -1.3, r: 30.5, estimated: false }  # 전문 지식
  reasoning: { s: 15.2, z: -0.98, r: 35.4, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.26, r: 31.1, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.11, r: 33.4, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.95, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.57, r: 26.4, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.51, r: 27.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Exaone 4.0 1.2B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Exaone 4.0 1.2B (non-reasoning)

LG AI Research · Open · Tiny · 컨텍스트 64k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.5 | -1.3 | 실측 | [[aa-omniscience]] 5.0%×1.0, [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 35.4 | -0.98 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 31.1 | -1.26 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 33.4 | -1.11 | 실측 | [[tau2-bench]] 20.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 35.7 | -0.95 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.4 | -1.57 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.4 | -1.51 | 실측 | [[ifbench]] 25.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
