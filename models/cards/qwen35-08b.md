---
type: Model
title: Qwen3.5 0.8B
creator: Alibaba
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 3.8, z: -1.79, r: 23.1, estimated: false }  # 전문 지식
  reasoning: { s: 0.4, z: -1.64, r: 25.4, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.25, r: 31.3, estimated: false }  # 코딩
  agentic: { s: 16.2, z: -0.86, r: 37.0, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.54, r: 58.1, estimated: false }  # 신뢰성
  multimodal: { s: 15.1, z: -2.81, r: 7.8, estimated: false }  # 멀티모달
  long_context: { s: 10.1, z: -1.26, r: 31.2, estimated: false }  # 긴문맥
  instruction: { s: 12.7, z: -1.73, r: 24.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Qwen3.5 0.8B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.1 | -1.79 | 실측 | [[aa-omniscience]] 4.0%×1.0, [[gpqa-diamond]] 11.0%×0.4, [[humanitys-last-exam]] 1.0%×0.3 |
| 추론 | 25.4 | -1.64 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 11.0%×1.0, [[humanitys-last-exam]] 1.0%×1.0 |
| 코딩 | 31.3 | -1.25 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 37.0 | -0.86 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 48.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 58.1 | +0.54 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 7.8 | -2.81 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 31.2 | -1.26 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 24.0 | -1.73 | 실측 | [[ifbench]] 21.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
