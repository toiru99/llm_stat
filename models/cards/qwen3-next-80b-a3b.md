---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.193
output_speed_tps: None
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.3, z: -0.23, r: 46.6, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.23, r: 46.6, estimated: false }  # 추론
  coding: { s: 15.2, z: -0.77, r: 38.4, estimated: false }  # 코딩
  agentic: { s: 11.2, z: -0.81, r: 37.8, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.72, r: 39.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.57, r: 58.6, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.62, r: 59.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium · 컨텍스트 262k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $0.193/1M · None t/s · TTFT Nones · 262k ctx` · 가성비 57.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.6 | -0.23 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 46.6 | -0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 38.4 | -0.77 | 실측 | [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 37.8 | -0.81 | 실측 | [[gdpval]] 128.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.6 | +0.57 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 59.3 | +0.62 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
