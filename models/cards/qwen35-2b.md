---
type: Model
title: Qwen3.5 2B
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 2.27
is_reasoning: true
radar:
  knowledge: { s: 17.9, z: -1.13, r: 33.0, estimated: false }  # 전문 지식
  reasoning: { s: 15.4, z: -0.97, r: 35.5, estimated: false }  # 추론
  coding: { s: 5.4, z: -1.77, r: 23.5, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.45, r: 43.2, estimated: false }  # 에이전트
  trust: { s: 24.7, z: 0.03, r: 50.5, estimated: false }  # 신뢰성
  multimodal: { s: 40.0, z: -1.52, r: 27.2, estimated: false }  # 멀티모달
  long_context: { s: 34.9, z: -0.44, r: 43.4, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.07, r: 33.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3.5 2B

Alibaba · Open · Tiny(2.27B) · 컨텍스트 262k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.13 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 35.5 | -0.97 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 23.5 | -1.77 | 실측 | [[scicode]] 3.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 43.2 | -0.45 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 50.5 | +0.03 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 27.2 | -1.52 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 43.4 | -0.44 | 실측 | [[aa-lcr]] 29.0%×1.0 |
| 지시 따르기 | 33.9 | -1.07 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
