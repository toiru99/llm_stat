---
type: Model
title: Qwen3 0.6B
creator: Alibaba
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: 0.752
is_reasoning: true
radar:
  knowledge: { s: 7.9, z: -1.58, r: 26.4, estimated: false }  # 전문 지식
  reasoning: { s: 7.7, z: -1.36, r: 29.6, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.77, r: 23.5, estimated: false }  # 코딩
  agentic: { s: 7.6, z: -1.11, r: 33.3, estimated: false }  # 에이전트
  trust: { s: 5.9, z: -1.03, r: 34.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.46, r: 28.1, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.61, r: 25.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 0.6B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# Qwen3 0.6B

Alibaba · Open · Tiny(0.752B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.4 | -1.58 | 실측 | [[aa-omniscience]] 4.0%×1.0, [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 29.6 | -1.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.5 | -1.77 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 33.3 | -1.11 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.5 | -1.03 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.1 | -1.46 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 25.9 | -1.61 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
