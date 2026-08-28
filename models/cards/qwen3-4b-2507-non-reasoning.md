---
type: Model
title: Qwen3 4B 2507 (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: past
size_class: Tiny
params_b: 4.02
is_reasoning: false
radar:
  knowledge: { s: 22.6, z: -0.9, r: 36.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 22.5, z: -1.05, r: 34.3, estimated: false }  # 코딩
  agentic: { s: 17.4, z: -0.76, r: 38.6, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.36, r: 44.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.3, z: -1.11, r: 33.4, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.9, r: 36.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 4B 2507 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Qwen3 4B 2507 (Non-reasoning)

Alibaba · Open · Tiny(4.02B) · 컨텍스트 262k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.5 | -0.9 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.3 | -1.05 | 실측 | [[scicode]] 18.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 38.6 | -0.76 | 실측 | [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.4 | -1.11 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 36.6 | -0.9 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
