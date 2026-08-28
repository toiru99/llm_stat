---
type: Model
title: Qwen3.5 2B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 2.27
is_reasoning: false
radar:
  knowledge: { s: 17.1, z: -1.17, r: 32.4, estimated: false }  # 전문 지식
  reasoning: { s: 15.8, z: -0.94, r: 35.8, estimated: false }  # 추론
  coding: { s: 9.8, z: -1.58, r: 26.3, estimated: false }  # 코딩
  agentic: { s: 29.6, z: -0.28, r: 45.8, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.14, r: 32.9, estimated: false }  # 신뢰성
  multimodal: { s: 40.0, z: -1.52, r: 27.2, estimated: false }  # 멀티모달
  long_context: { s: 18.1, z: -0.96, r: 35.6, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.19, r: 32.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 2B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Qwen3.5 2B (Non-reasoning)

Alibaba · Open · Tiny(2.27B) · 컨텍스트 262k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.4 | -1.17 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 44.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.8 | -0.94 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 44.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 26.3 | -1.58 | 실측 | [[scicode]] 7.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 45.8 | -0.28 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 32.9 | -1.14 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | 27.2 | -1.52 | 실측 | [[mmmu-pro]] 43.0%×1.0 |
| 긴문맥 | 35.6 | -0.96 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 32.1 | -1.19 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
