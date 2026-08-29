---
type: Model
title: Qwen3.5 9B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.178
output_speed_tps: 92.0
context_window: 262000
status: current
size_class: Small
params_b: 9.65
is_reasoning: false
radar:
  knowledge: { s: 34.4, z: -0.31, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 33.0, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 40.2, z: -0.31, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 56.6, z: 0.77, r: 61.6, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.14, r: 32.9, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 54.2, z: 0.15, r: 52.2, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.66, r: 40.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3.5 9B (Non-reasoning)

Alibaba · Open · Small(9.65B) · 컨텍스트 262k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.17 · 출력 $0.25 · 혼합 $0.178/1M · 92.0 t/s · TTFT 0.79s · 262k ctx` · 가성비 118.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 45.4 | -0.31 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 61.6 | +0.77 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 32.9 | -1.14 | 실측 | [[aa-omniscience]] 2.0%×1.0 |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 52.2 | +0.15 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 40.1 | -0.66 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
